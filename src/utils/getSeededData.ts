import express, { Request, Response, NextFunction } from 'express'
import {faker} from '@faker-js/faker'
const app = express()

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

app.get('/generateusers',mockApiData(20),(req,res,next)=>{
    res.status(201).json(req.users)
})


app.listen(3000,()=>{
    console.log('server active at port : 3000')
})