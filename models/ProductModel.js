const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    poster: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    userId: { type: String },
    username: { type: String },

}, {
    versionKey: false
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;