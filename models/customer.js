const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Customer – First Name, Last Name, Address, Phone, Start Date

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    }
})

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;