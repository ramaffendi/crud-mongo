const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    nama: String,
    price: Number,
    stock: Number,
    status: Boolean,
    category: [String],
}, { collection: 'product' });  

const product = mongoose.model('product', productSchema);

module.exports = product;
