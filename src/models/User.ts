import mongoose from 'mongoose'
import bcrypt from "bcryptjs";


interface User{
    name:string,
    email:string,
    password:string
}


export interface UserDocument extends User, Document {
  comparePassword(incomingPassword: string): Promise<boolean>;
}

const userSchema  = new mongoose.Schema<UserDocument>({
    
   name:{
    type:String,
    required:[true,"name is required"],
    match : [/^[a-zA-Z]+$/,"name is invalid"]
   },
   email:{
    type:String,
    required:[true,"email is required"],
    unique:true,
    lowercase:true,
    match : [/^[a-zA-Z0-9@.]+$/,"email is invalid"]
   },

   password:{
    type:String,
    required:[true,"password is required"],
    match : [/^[a-zA-Z0-9!@#$%^&*]+$/,"password is invalid"],
    minlength:[4,"password should lie between 4 to 8 characters"],
    maxlength:[8,"password should lie between 4 to 8 characters"]
   }


})


userSchema.pre<UserDocument>('save',async function encryptPassword(next){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

userSchema.methods.comparePassword = function checkPassword(incomingPassword:string){
    return bcrypt.compare(incomingPassword,this.password)
}

export default mongoose.model<UserDocument>('User',userSchema)
