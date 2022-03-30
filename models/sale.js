const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Each sale needs a: Product, Salesperson, Customer, Sales Date

const saleSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    salesperson: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    salesDate: {
        type: Date,
        required: true
    }
})

const Sale = mongoose.model("Sale", saleSchema);
module.exports = Sale;