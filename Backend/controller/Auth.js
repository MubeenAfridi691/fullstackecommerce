const express = require('express')
const router = express.Router()
var bcrypt = require('bcryptjs');
const User = require('../Model/Usermodel')
const jwt = require('jsonwebtoken');
require('dotenv').config()
var cookieParser = require('cookie-parser')



// const usersignup = async (req, res) => {
//     const { name, email, password } = req.body;

//     try {
//         // Check if the user already exists
//         const user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ msg: "User already exists" });
//         }

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create a new user
//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword,
//             Roll: 'general'
//         });

//         await newUser.save();
//         return res.status(200).json({ msg: "User created successfully" });

//     } catch (error) {
//         console.error(error);  // Use console.error for errors
//         return res.status(500).json({ msg: "Server error" });
//     }
// };


const usersignup = async (req, res) => {
    const { name, email, password } = req.body;
try {
    const user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ msg: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
        Roll: 'general'
    });
    await newUser.save();
    return res.status(200).json({ msg: "User created successfully" });
} catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Server error" });
    
} 


    
    
}


const usersignin=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(400).json({msg:"User does not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
      const token=  jwt.sign({
            id: user._id,
            email: user.email

          }, process.env.JWT_SECRET, { expiresIn: '8h' });
          res.cookie('token', token, {
            httpOnly: true, // Prevents client-side access to the cookie
             // Use true in production
            sameSite: 'None', // Allows cross-site cookie usage
            maxAge: 3600000,
            httpOnly: true, secure: true
        });

        if (!isMatch) {
            return res.status(400).json({msg:"Invalid credentials"})
        }
        res.status(200).json({msg:"User logged in successfully",

            token:token
        })
        } catch (error) {
        console.log(error);
        res.status(500).json({msg:"Server error"})
        }}




  const userdetails=async(req,res)=>{
           
    const user = await User.findById(req.userid)
    if (!user) {
            return res.status(400).json({msg:"User does not exist"})
            }
            console.log(user);
            res.status(200).json({msg:"User details",user})
    


        }




module.exports = {
    usersignup,
    usersignin,
    userdetails
    
}