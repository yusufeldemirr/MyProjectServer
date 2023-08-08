const User = require("../models/User.js")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const register = async(req,res,next)=>{
    const {username,password,email} = req.body;
    try {
        const user = await User.findOne(email)
        if(user){
            return res.status(500).json({message: "Zaten böyle bir kullanıcı bulunmakta."})
        }
        if(password.length < 6) res.status(500).json({message: "parola 6 karakterden kısa olmamalı."})
        const passwordHash = await bcrypt.hash(password,12)

        if(!isEmail(email)) res.status(500).json({message:"lütfen geçerli bir mail yazınız."})

        const newUser = await User.create({...req.body, password : passwordHash})

        const token = await jwt.sign({id:newUser._id, idAdmin:newUser.isAdmin}, "SECRET KEY", {expiresIn : "1h"})        //idAdmin-isAdmin

        res.cookie("token", token, {httpOnly: true}).status(201).json({
            token,
            newUser
        })

    } catch (error) {
        res.status(500).json({message: error})
    }
}



const login = async(req,res,next)=>{
    const {password,email} = req.body;
    try {
        const user = await User.findOne(email)
        if(!user){
            return res.status(500).json({message: "Böyle bir kullanıcı bulunmakta."})
        }
        const passwordCompare = await bcrypt.compare(password,user.password)

        if(!passwordCompare)
            return res.status(500).json({message: "Parolanız yanlış"})


        const token = await jwt.sign({id:user._id, idAdmin:user.isAdmin}, "SECRET KEY", {expiresIn : "1h"})        //buraya bak 

        res.cookie("token", token, {httpOnly: true}).status(200).json({
            token,
            user
        })

    } catch (error) {
        res.status(500).json({message: error})
    }
}

module.exports = {register, login}




function isEmail(emailAdress){
    let regex = /^\w+([\.-]?w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(emailAdress.matxh(regex))
    return true;

    else 
    return false;
}

 