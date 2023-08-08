const Book = require("../models/Book.js")
const Comment = require("../models/Comment.js")


const createBook = async (req, res)=> {
    try {
        const book = {
            bookName: req.body.newbook.bookName,
            bookDesc: req.body.newbook.bookDesc,
            bookComment: req.body.newbook.bookComment,
            bookRating: req.body.newbook.bookRating,
            bookAuthor: req.body.newbook.bookAuthor,
            bookType: req.body.newbook.bookType,
            bookPublicationYear: req.body.newbook.bookPublicationYear
        }
        await Book.create(book);
        res.status(200).json(book)
    } catch (error) {
        console.log(error.message)
    }
}


const updateBook = async (req, res, next)=> {
    const {id} = req.params
    try {
        const book = await Book.findByIdAndUpdate(id, {$set : req.body}, {new:true});
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const deleteBook = async (req, res, next)=> {
    const {id} = req.params
    try {
        await Book.findByIdAndDelete(id);
        res.status(200).json({message: "Kitap silme işlemi başarılı"})
    } catch (error) {
        res.status(500).json({message:error})
    }
}


const getSingleBook = async (req, res, next)=> {
    const {id} = req.params
    try {
        const book = await Book.findById(id);
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const getAllBook = async (req, res, next)=> {
    const {min, max, ...others} = req.query;
    try {
        const book = await Book.find({
            ...others,
            bookType
        });
        res.status(200).json(book)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const typeByBook = async (req, res, next)=> {
    try {
        const roman = await Book.countDocuments({type: "roman"})
        const hikaye = await Book.countDocuments({type: "hikaye"})
        const masal = await Book.countDocuments({type: "masal"})
        const gezi = await Book.countDocuments({type: "gezi"})
        const edebiyat = await Book.countDocuments({type: "edebiyat"})
        const ekonomi = await Book.countDocuments({type: "ekonomi"})

        res.status(200).json([
            {type:"roman", count : roman},
            {type:"hikaye", count : hikaye},
            {type:"masal", count : masal},
            {type:"gezi", count : gezi},
            {type:"edebiyat", count : edebiyat},
            {type:"ekonomi", count : ekonomi},
        ])
    } catch (error) {
        res.status(500).json({message:error})
    }
}


 module.exports = {typeByBook,getAllBook,getSingleBook,deleteBook,updateBook,createBook}
