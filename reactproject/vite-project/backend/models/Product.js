// models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  image: String,
});

module.exports = mongoose.model('Product', ProductSchema);