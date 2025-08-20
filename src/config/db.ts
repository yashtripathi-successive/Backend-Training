import mongoose from 'mongoose'

async function connectDB(){

    try{
        await mongoose.connect('mongodb://localhost:27017/successivedb')
        console.log('Database Connected')

    }catch(err){
        console.log('DB not Connected')
    }

}

export default connectDB