const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Product, Begin Date, End Date, Discount Percentage

const discountSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    beginDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    discountPercentage: {
        type: Number,
        required: true
    }
})

const Discount = mongoose.model("Discount", discountSchema);
module.exports = Discount;