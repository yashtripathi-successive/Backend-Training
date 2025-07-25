import { Request, Response } from "express"


class writeQueryParametersClass{
public writeQueryParameters(req:Request,res:Response){
    res.status(201).json({message:"parameters are numeric",query:req.query})
}

}
export default writeQueryParametersClass