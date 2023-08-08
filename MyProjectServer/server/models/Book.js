const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    bookName:{
        type: String,
        required: true
    },
    bookDesc:{
        type: String,
        required: true
    },
    bookComment:{
        type: String,
        required: true
    },
    bookRating:{
        type: Number,
        min: 0,
        max: 5
    },
    bookAuthor:{
        type: String,
        required: true
    },
    bookType:{
        type:String,
        requied: true
    },
    bookPublicationYear:{
        type:Number,
        min:0,
        max:2023,
    }
})

module.exports = mongoose.model("Book", bookSchema)