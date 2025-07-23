import {faker} from '@faker-js/faker'
import { NextFunction, Request, Response } from 'express'

interface MockUser {
  name: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      users?: MockUser[];
    }
  }
}



function mockApiGenerator(){
    return function(req:Request,res:Response,next:NextFunction){
        const count = parseInt(req.body.count)
        const users:MockUser[] = []
        for(let i=0;i<count;i++){
            users.push({
                name:faker.person.fullName(),
                email:faker.internet.email()
            })
        }

        req.users = users
        next()
    }
}

export default mockApiGenerator