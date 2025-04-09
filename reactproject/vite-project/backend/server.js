require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Cart Schema
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      quantity: Number,
    }
  ],
});

const Cart = mongoose.model('Cart', cartSchema);
const Product = require('./models/Product.js')

// Register User
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send('Email already in use');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    const cart = new Cart({ userId: user._id, items: [] });
    await cart.save();

    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Registration failed');
  }
});

// Login User
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send('Invalid email or password');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(500).send('Login failed');
  }
});

// Add item to cart
app.post('/cart/add', async (req, res) => {
  try {
    const { userId, productId, name, price, quantity } = req.body;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId, name, price, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).send('Could not add item to cart');
  }
});

// Get user cart
app.get('/cart/:userId', async (req, res) => {
  try {
    console.log('Fetching cart for userId:', req.params.userId);

    let cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = new Cart({ userId: req.params.userId, items: [] });
      await cart.save();
    }

    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).send('Could not retrieve cart');
  }
});

app.patch("/cart/:userId/:productId/decrement", async (req, res) => {
  let cart = await Cart.findOne({ userId: req.params.userId });
  if (!cart) {
    res.status(404).send('cart not found');
  }
  const index = cart.items.findIndex(it => it.productId == req.params.productId)
  if (index != -1) {
    cart.items[index].quantity = Math.max(cart.items[index].quantity-1, 0);
    cart.save();
    res.status(200).send();
  }

});

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
})
// Remove item from cart
app.delete('/cart/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });

    if (cart) {
      cart.items = [];
      await cart.save();
      res.send('Cart cleared');
    } else {
      res.status(404).send('Cart not found');
    }
  } catch (error) {
    res.status(500).send('Could not clear cart');
  }
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
