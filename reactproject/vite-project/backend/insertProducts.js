require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust the path to your Product model

// Connect to MongoDB with a longer timeout
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit the script if connection fails
  });

// Sample products data
const products = [
  {
    name: 'Product 1',
    description: 'This is a description for Product 1.',
    price: 19.99,
    image: 'https://th.bing.com/th/id/OIP.TczlwQKhM-LHdzjoQVOc6gHaE0?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Product 2',
    description: 'This is a description for Product 2.',
    price: 29.99,
    image: 'https://th.bing.com/th/id/R.b431dc402f555ae90ced995675e5f45e?rik=WlMq074NhETBIA&riu=http%3a%2f%2fmedia.wired.com%2fphotos%2f64daad6b4a854832b16fd3bc%2fmaster%2fpass%2fHow-to-Choose-a-Laptop-August-2023-Gear.jpg&ehk=4GSXtaiNUDmDgXAL09p%2fu7twvP9bb8WpK4Q6BNc9xbM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Product 3',
    description: 'This is a description for Product 3.',
    price: 39.99,
    image: 'https://img.freepik.com/premium-photo/laptop-blank-screen-yellow-color-work-dask-table-pastel-color-computer-background-concept_37817-716.jpg',
  },
];

// Insert sample products into the database
Product.insertMany(products)
  .then(() => {
    console.log('Sample products inserted');
    mongoose.connection.close(); // Close the connection after insertion
  })
  .catch((err) => {
    console.error('Error inserting products:', err);
    mongoose.connection.close(); // Close the connection on error
  });