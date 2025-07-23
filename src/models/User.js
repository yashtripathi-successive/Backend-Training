import mongoose from 'mongoose'


const addressSchema = new mongoose.Schema({
    city:String,
    zip:Number,

})


const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    age:Number,
    hobbies:[String],
    address:addressSchema
})


export default mongoose.model('User',userSchema)