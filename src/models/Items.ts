// import mongoose from 'mongoose'

// export interface items{
//     title:string;
//     description:string;
// }

// const Items = new mongoose.Schema<items>({
//     title:String,
//     description:String
// })


// export default mongoose.model<items>('Item',Items)

import { required } from "joi";
import mongoose from "mongoose";
import { title } from "process";


export interface items{
    title:{
        type:string,
        required:[true,"title is required"]
    },
    description : {
        type:string,
        required:[true,"descripton is required"]
    }
}

const Items = new mongoose.Schema<items>({
    title:String,
    description:String
})


export default mongoose.model<items>('Item',Items)