const {getDetailComment, getAllComment,createComment,deleteComment,updateComment} = require("../controllers/comment.js")
const express = require("express");
const {verifyAdmin} = require("../middleware/verify.js")

const router = express.Router();


router.get("/getAllComment",getAllComment)
router.get("/getDetailComment/:id",getDetailComment)
router.put("/updateComment/:id",updateComment)
router.post("/createComment/:id/:bookid",createComment)
router.delete("/getAllComment/:id/:bookid",deleteComment,verifyAdmin)



module.exports = router