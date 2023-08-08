const express = require("express");
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const db = require("./config/db.js");
const authRoutes = require("./routes/auth.js")
const bookRoutes = require("./routes/book.js")
const commentRoutes = require("./routes/comment.js")
const userRoutes = require("./routes/user.js")
const authorRoutes = require("./routes/author.js")

dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cookieParser())
app.use("/,",authRoutes)
app.use("/",bookRoutes)
app.use("/,",commentRoutes)
app.use("/,",userRoutes)
app.use("/",authorRoutes)


const PORT = 3000;

db()

app.listen(PORT, ()=>{
    console.log("Server is ruınning on port: ",PORT);
})