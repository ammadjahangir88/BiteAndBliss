const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const Schema = mongoose.Schema;

const userSchema= new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userType:{
        type: String,
        required: true,
    },
    loyaltyPoints:{
        type: Number

    },
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
})


userSchema.pre('save',function(next){
    if (this.isModified('password')){
        bcrypt.hash(this.password,8,(err,hash)=>{
            if (err) return next(err)

            this.password=hash;
            next();
        })
    }
})

userSchema.methods.comparePassword= async function(password){
    if (!password) throw new Error("Password is missing , can't compare");
    try{
       const result= await bcrypt.compare(password,this.password)
       return result;
    }catch(err){
        console.log("Error while comparing password !!", err.message)
    }
}
userSchema.statics.isThisEmailInUse= async function(email){
    if (!email)  throw new Error("Invalid Email!")
    try{
        const user= await this.findOne({email})
        if (user) return false;
         
        return true;

    }
    catch(err){
        console.log("Error inside isThisEmailInUse method",err.message)
        return false;

    }

}


module.exports=mongoose.model('User',userSchema)
