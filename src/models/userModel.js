import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role:{
        type: String,
        require: true,
    },
    // isVerified:{
    //     type: Boolean,
    //     default: false
    // },
    // isAdmin:{
    //     type: Boolean,
    //     default: false
    // },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date
})

const User =mongoose.models.User || mongoose.model("User" , userSchema);

export default User