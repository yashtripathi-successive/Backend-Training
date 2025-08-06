import express, { NextFunction, Request, Response } from 'express'

async function intentionalError(req:Request,res:Response,next:NextFunction){
    try{
        await new Promise((resolve,reject)=>{
            reject(new Error("Error Successfully Generated"))
        })
    }
    catch(err){
        next(err)
    }
}


export default intentionalError

