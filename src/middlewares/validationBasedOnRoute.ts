import  { NextFunction, Request, Response } from 'express'
import schema from '../validations/schema';

function validateRoute(req:Request,res:Response,next:NextFunction){
         type ValidRoutes = keyof typeof schema;
         const route = req.route.path

         if(!route) return res.status(400).json({
            message:"invalid route"
         })

         if(route){
            const {error,value} = schema[route as ValidRoutes].validate(req.body)
            if(error){
                res.status(400).json({
                    message:"Error found in schema"
                })
            }

            
                
            
         }
         next()
    }



export default validateRoute