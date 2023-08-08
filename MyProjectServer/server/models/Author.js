const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    authorName:{
        type: String,
        required: true
    },
    authorSurname:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Author", authorSchema)