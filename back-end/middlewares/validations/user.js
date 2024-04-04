const {check, validationResult, checkExact} = require('express-validator')

exports.validateUserSignUp=[
    check('fullName').trim().not().isEmpty().isLength({min: 3, max: 20})
    .withMessage("Name must be within 3 to 20 chracters"),
    check('email').normalizeEmail().isEmail().withMessage("Invalid Email"),
    check('password').trim().not().isEmpty()
    .withMessage("Password is EMpty")
    .isLength({min: 8, max: 20})
    .withMessage('Password Must be  3 to 20 characters long '),
    check('confirmPassword').trim().not().isEmpty().custom((value,{req})=>{

        if (value !== req.body.password)
        {
            throw new Error("Both password must be same!")
        }
        return true;

    })

]

exports.userValidation=(req,resp,next)=>{
    const result=validationResult(req).array();
    if (!result.length) return next();

    const error=result[0].msg;
    resp.json({success: false,message: error})
}

exports.validateUserSignIn=[
    check('email').trim().isEmail().withMessage("email/password is required! "),

    check('password').trim().not().isEmpty().withMessage("email/password is required! ")
]