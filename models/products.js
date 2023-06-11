const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: Number,
    description: String
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;