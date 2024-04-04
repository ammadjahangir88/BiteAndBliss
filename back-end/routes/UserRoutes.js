const express=require('express');
const { validateUserSignUp, userValidation, validateUserSignIn } = require('../middlewares/validations/user')

const { createUser, userSignIn } = require('../controllers/UserController');
const { isAuth } = require('../middlewares/auth');


const router=express.Router();


router.post('/create-user',validateUserSignUp,userValidation,createUser)

router.post("/sign-in",validateUserSignIn,userValidation,userSignIn)

router.get('/create-post',isAuth, (req,resp)=>{
    resp.json("You are in crate post route")
});
module.exports= router