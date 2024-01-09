const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    tittle: {
        type: String,
        required: true,
        trim: true,
        maxLength: 30
    },
    amount: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 10
    },
    type: {
        type: String,
        default:"Income"
    },
    date: {
        type: date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    Description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 10
    },
}, {timestamps: true})

module.exports = mongoose.type('Expense', ExpenseSchema)