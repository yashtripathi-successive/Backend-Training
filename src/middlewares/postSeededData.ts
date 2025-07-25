import {Request, NextFunction, Response } from 'express'
import {faker} from '@faker-js/faker'


interface user{
    id:string;
    name:string;
    email:string;
    gender:string;
}


declare global{
    namespace Express{
        interface Request{
            users?:user[]
        }
        
    }
}



function generateMockData(){
    return (req:Request,res:Response,next:NextFunction)=>{


        const count = parseInt(req.body.count)

        if(!count){
        return res.status(400).json({
            message:"not a valid count"
        })
        }

        const users:user[] = []

        for(let i=0;i<count;i++){
            users.push({
                 id:faker.string.uuid(),
                 name:faker.person.firstName(),
                 email:faker.internet.email(),
                 gender:faker.person.sexType()
            })
        }

        req.users=users
        next()
    }
}



    


export default generateMockData