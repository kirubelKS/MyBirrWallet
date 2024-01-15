const mongoose = require('mongoose');
const UserSchema= require("../models/UserModel")

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected')

        // await UserSchema.create({ email: "kirubel@gmail.com", password: "Pass123", name: "Kirubel Gebeyehu" });

    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}
