const Author = require("../models/Author.js")
const Book = require("../models/Book.js")


const createAuthor = async (req, res, next)=> {
    const authorId = req.params.authorid
    try {
        const author = await Author.create(req.body);

        await Book.findByIdAndUpdate(authorId, {$push : {comments: author._id}})

        res.status(201).json(author)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const updateAuthor = async (req, res, next)=> {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, {$set : req.body}, {new: true})

        res.status(200).json(author)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const deleteAuthor = async (req, res, next)=> {
    const authorId = req.params.authorid
    try {
        await Author.findByIdAndDelete(req.params.id)

        await Book.findByIdAndUpdate(authorId, {$pull : {authors: req.params.id}})


        res.status(200).json({message : "Kitap yazarı silindi."})
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getDetailAuthor = async (req, res, next)=> {
    try {

        const author = await Author.findById(req.params.id)

        res.status(200).json(author)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = {deleteAuthor,createAuthor,updateAuthor,getDetailAuthor}