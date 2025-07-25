import { NextFunction, Request, Response } from "express"


class validateQueryParametersClass{
public validateQueryParameters(parameters:string[]= []){
    return function (req:Request,res:Response,next:NextFunction) {
        for(const params of parameters){
            const value = req.query[params]
            if(isNaN(Number(value))){
                return res.status(400).json({message : "parameters are string",query:req.query})
            }
        }
        next()
    }


}
}
export default validateQueryParametersClass