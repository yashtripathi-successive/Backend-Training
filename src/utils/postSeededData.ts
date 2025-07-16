import express, {Request, NextFunction, Response } from 'express'
import {faker} from '@faker-js/faker'
const app = express()

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

app.use(express.json())

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



app.post('/generateuser1',generateMockData(), (req,res)=>{
   
    res.status(201).json(req.users)
})
    


app.listen(3000,()=>{
    console.log('server active at port 3000')
})