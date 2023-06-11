const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  description: String,
  image: string,
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
