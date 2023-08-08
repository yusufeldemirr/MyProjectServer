const mongoose = require ("mongoose");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        default: false
    }
},{timestamps: true})

module.exports = mongoose.model("User", userSchema)