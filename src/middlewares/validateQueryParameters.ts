import { NextFunction, Request, Response } from "express"


function validateQueryParameters(parameters:string[]=[]){

    return (req:Request,res:Response,next:NextFunction) =>{
    for(const parameter of parameters){

        const value = req.query[parameter]
        if(value === undefined){
            return res.status(400).json({
                message:"parameter is undefined"

            })
        }

        else if (isNaN(Number(value))){
           return res.status(400).json({
                message:"parameter is string"
            })
        }
     
    }
    next()
}
}

export default validateQueryParameters
