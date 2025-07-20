import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

const users : {[email:string]:{password:number}} = {}

app.post('/register',(req:Request,res:Response)=>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message:"email or id is invalid"
        })
    }

    if(password.length <= 6){
        return res.status(422).json({
            message:"password is short"
        })
    }

    if(!/^[a-zA-Z0-9@.]+$/.test(email)){
        return res.status(422).json({
            message:"email is invalid"
        })
    }

    if(users[email]){
        return res.status(409).json({
            message:"user already exists"
        })
    }

    users[email] = {password}
    res.status(201).json({
        message:"user created successfully"
    })
})



app.post('/login',(req:Request,res:Response)=>{
    const {email,password} = req.body

    if(!email || !password){
        return res.status(400).json({
            message:"email id or password is wrong"
        })
    }

    if(!users[email]){
        return res.status(404).json({
            message:"email not exists"
        })
    }

    if(users[email] && users[email].password!==password){
        return res.status(401).json({
            message:"password is wrong"
        })
    }

    
    res.status(200).json({
        message:"user loggedin successfully"
    })
})

app.listen(3000,()=>{
    console.log('server active at port 3000')
})