const UserSchema= require("../models/UserModel")


exports.loginUser = async (req, res) => {
    const {email, password}  = req.body


    try {
        //validations
        if(!email || !password){
            return res.status(400).json({message: 'All fields are required!'})
        }

        const user = await UserSchema.findOne({ email: email, password: password });

        if(!user){
            return res.status(400).json({message: "User doesn't exist"})
        }

        res.status(200).json({message: 'User Login', data: user})
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}