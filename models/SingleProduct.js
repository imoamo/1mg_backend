const mongoose = require('mongoose');

const SingleSchema = mongoose.Schema({
    poster: { type: [String], required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    feautres: { type: [String], required: true },

}, {
    versionKey: false
});

const SingleProductModel = mongoose.model('single', SingleSchema);

module.exports = SingleProductModel;

