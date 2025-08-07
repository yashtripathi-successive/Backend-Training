import { NextFunction, Request, Response } from "express"

function reqLogger(req:Request,res:Response,next:NextFunction){

    const method = req.method
    const url = req.url
    const timestamp = new Date().toISOString()
    console.log(`method is : ${method}, url is : ${url} and timestamp is : ${timestamp}`)
    next()


}
export default reqLogger