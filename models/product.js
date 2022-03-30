const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Needs:
//Name, Manufacturer, Style, Purchase Price, Sale Price, 
//Commission Percentage, Qty On Hand

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    purchasePrice: {
        type: Number,
        required: true
    },
    salePrice: {
        type: Number,
        required: true
    },
    qtyOnHand: {
        type: Number,
        required: true
    },
    comissionPercentage: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;