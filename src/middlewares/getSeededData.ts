import { Request, Response, NextFunction } from 'express'
import {faker} from '@faker-js/faker'


interface user{
    id:string;
    name:string;
    email:string;
    gender:string;
}

declare global {
  namespace Express {
    interface Request {
      users?: user[]
    }
  }
}

function mockApiData(count:number){

    return (req:Request,res:Response,next:NextFunction) => {
    try{
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
    catch(err){
    next(err)
    }
}
}



export default mockApiData
