import mongoose from 'mongoose'


const userSchema  = new mongoose.Schema({
    name:{
        type:String,
        match : [/^[a-zA-Z ]+$/,"inavlid name"],
        required : [true,"name is required"]
    },

    email:{
        type:String,
        match : [/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,"invalid email"],
        required : [true,"email is required"]
    },
    
    password:{
        type:String,
        match : [/^[a-zA-Z0-9!@#$%^&*]{4,8}$/,"invalid password"],
        required : [true,"password is required"] 

    },
    role:{
        type : String,
        enum : ['admin','user','editor'],
        default : 'user'
        
    }
})


export default mongoose.model('newUser',userSchema)