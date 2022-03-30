const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// First Name, Last Name, Address, Phone, Start Date, 
//Termination Date, Manager

const salespersonSchema = new Schema({
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
    },
    terminationDate: {
        type: Date,
        required: true
    },
    manager: {
        type: String,
        required: true
    }
})

const Salesperson = mongoose.model("Salesperson", salespersonSchema);
module.exports = Salesperson;