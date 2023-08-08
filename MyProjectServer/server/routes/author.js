const {deleteAuthor,createAuthor,updateAuthor,getDetailAuthor} = require("../controllers/author.js")
const express = require("express");
const {verifyAdmin} = require("../middleware/verify.js")

const router = express.Router();



router.get("/getDetailAuthor/:id",getDetailAuthor)
router.put("/updateAuthor/:id",updateAuthor)
router.post("/createAuthor/:id/:authorid",createAuthor)
router.delete("/deleteAuthor/:id/:authorid",deleteAuthor)



module.exports = router

