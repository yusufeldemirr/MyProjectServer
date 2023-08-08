const {typeByBook,getAllBook,getSingleBook,deleteBook,updateBook,createBook} = require("../controllers/book.js")
const express = require("express")
const {verifyAdmin,verifyUser} = require("../middleware/verify.js")

const router = express.Router();

router.get("/typeByBook",typeByBook,verifyUser)
router.put("/updateBook/:id",updateBook,verifyAdmin,verifyUser)
router.post("/createBook",createBook)
router.delete("/deleteBook/:id",deleteBook,verifyAdmin,)
router.get("/getSingleBook/:id",getSingleBook,verifyUser)
router.get("/getAllBook",getAllBook,verifyUser)

module.exports = router