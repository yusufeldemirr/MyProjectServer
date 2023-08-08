const mongoose = require ("mongoose");


const commentSchema = new mongoose.Schema({
    commentTitle:{
        type:String,
        required: true
    },
    commentContent:{
        type:String,
        required: true,
    },
    commentDate:{
        type:Date,
    },
    commentToBook:{
        type:String,
        required: true
    }




    // yorumun ypaıldığı tarih ve kullanıcı eklenecek hangi kitaba yorum ypaıldı kitap ıd den çekilecek 
},{timestamps: true})

module.exports = mongoose.model("Comment", commentSchema)