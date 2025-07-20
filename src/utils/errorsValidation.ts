import express from 'express'
const app = express()


interface reqData{
    email:string;
    password:string;
}

app.use(express.json())
const users : { [email: string]: { password: string }} = {}
app.post('/register',(req,res,next)=>{
    const errorsRegister : Partial<reqData> = {}

  
    const {email,password} = req.body

    if(!email){
        errorsRegister.email = "email is required"
    }

    if(!password){
        errorsRegister.password = "password is required"
    }

    if(users[email]){
        errorsRegister.email = "email already exists"
    }


    if(Object.keys(errorsRegister).length > 0){
        res.status(400).json({
            message:"Errors found",
            errorsRegister
        })
        
    }
    users[email] = {password}
    res.status(201).json({
        message:"user created successfully"
    })
})



app.post('/login',(req,res,next)=>{
    const {email,password} = req.body

    const errorsLogin : Partial<reqData> = {}
    
    if(!email){
        errorsLogin.email = "email is invalid"
    }

    if(!password){
        errorsLogin.password = "password is invalid"
    }

    if(users[email] && users[email].password!==password){
        errorsLogin.email = "email exists but password is wrong"
    }


    if(Object.keys(errorsLogin).length > 0){
        return res.status(400).json({
            message:"Errors found",
            errorsLogin
        })
    }

    res.status(200).json({
        message:"user loggedin successfully"
    })

})

app.listen(3000,()=>{
    console.log('server active at port 3000')
})