const Book = require("../models/Book.js")
const Comment = require("../models/Comment.js")

const createComment = async (req, res, next)=> {
    const bookId = req.params.bookid
    try {
        const comment = await Comment.create(req.body);

        await Book.findByIdAndUpdate(bookId, {$push : {comments: comment._id}})


        res.status(201).json(comment)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const updateComment = async (req, res, next)=> {
    try {

        const comment = await Comment.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true})


        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const deleteComment = async (req, res, next)=> {
    const bookId = req.params.bookid
    try {
        await Comment.findByIdAndDelete(req.params.id)

        await Book.findByIdAndUpdate(bookId, {$pull :{comments: req.params.id}})


        res.status(200).json({message : "Bu yorum silindi."})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getDetailComment = async (req, res, next)=> {
    try {

        const comment = await Comment.findById(req.params.id)

        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getAllComment = async (req, res, next)=> {
    try {

        const comment = await Comment.find()

        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports ={getDetailComment, getAllComment,createComment,deleteComment,updateComment}