const models = require('../models');
const bcriptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User Registration controller
const signUp = async(req,res)=>{
try {

    bcriptjs.genSalt(10, (err, salt)=>{

        bcriptjs.hash(req.body.password, salt, async(err, hash)=>{


            const user = {
                name:req.body.name,
                email:req.body.email,
                password:hash,
                
            };
        
            const  newUser = await models.User.create(user);
        
            if(newUser){
                res.status(200).json({
                    message:"User created successfully!",
                    user:newUser
                });
            }else{
                res.status(400).json({
                    message:"Something went wrong!",
                    
                });
            }
            


        })
    })

    
} catch (error) {
   res.status(500).json({
    message:"Internal server Error",
    error:error
   }) 
}
};

// User Login controller

const signIn = async(req,res)=>{
    try {
        
    } catch (error) {
       res.status(500).json({
        message:"Internal server Error",
        error:error
       }) 
    }
    };

// User Logout controller

    const logOut = async(req,res)=>{
        try {
            
        } catch (error) {
           res.status(500).json({
            message:"Internal server Error",
            error:error
           }) 
        }
        };



        module.exports = {signUp, signIn, logOut};