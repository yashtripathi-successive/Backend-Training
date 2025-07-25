import express, {NextFunction, Request, Response} from 'express'
import { faker } from '@faker-js/faker'
import jwt from 'jsonwebtoken'
const app = express();

interface jwtData{
    name:string;
    gender:string;
}



interface user{
    id:string;
    name:string;
    email:string;
    gender:string;
}

const user: jwtData = {name:"yash",gender:"male"}
const secretKey = "xyz"


app.get('/login',(req:Request,res:Response)=>{
   
    const token = jwt.sign(user,secretKey)
    

    if(!token){
        return res.status(400).json({
            message:"invalid token found"
        })
    }

    console.log(token)
    res.status(201).json({
        token
    })
})


function checkAuth(){
    return (req:Request,res:Response,next:NextFunction)=>{
    console.log(req);

    const header = req.headers.authorization
    if(!header) {
        return res.status(400).json({
            message:"invalid header"
        })
    }


    const validHeader = header.split(' ')[1]
    const data = jwt.verify(validHeader,secretKey) as jwtData
    console.log(data)
    next()

    }
}

function mockData(){
    return (req:Request,res:Response,next:NextFunction)=>{
          const count = 10
          const users: user[] = []

          for(let i=0;i<count;i++){
            users.push({
                id:faker.string.uuid(),
                name:faker.person.firstName(),
                email:faker.internet.email(),
                gender:faker.person.sexType()
                
            })
          }
          return res.status(201).json(
            users)

    }
}


app.get('/protected',checkAuth(),mockData())

const PORT=3000;

app.listen(PORT,()=>{
    console.log('server active at port',PORT)
})