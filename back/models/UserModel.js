const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        maxLength: 250
    },
    password: {
        type: String,
        required: true,
        maxLength: 250,
        trim: true
    },
    name: {
        type: String,
    },
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema)
