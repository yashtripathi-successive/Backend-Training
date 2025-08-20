import { NextFunction, Request, Response } from "express";
import Item from "../models/Items";

class createApiClass{
public async creatAPI(req:Request,res:Response,next:NextFunction){

    try{
        const {title,description} = req.body

        const data = new Item({title,description})
        await data.save()
        res.status(201).json({
        message: "Item created successfully",
        data
    });
        
    }catch(err){
        next(err)
    }
    
}
}
export default createApiClass