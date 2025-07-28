import { NextFunction } from "connect";
import { Request, Response } from "express";


function userRoles(...allowedRoles : string []){
    return function(req:Request,res:Response,next:NextFunction){

        const {userRole} = req.body

        if(!allowedRoles.includes(userRole)){
            return res.status(400).json({
                message : "you are not authorized to access this page"
            })
        }

        next()

    }

}


export default userRoles