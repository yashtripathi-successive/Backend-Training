import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import User from './models/User.js'

const app = express()
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/successivedb',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const db = mongoose.connection;
db.once('open',()=>{
    console.log("mongo db connected")
})


app.post('/', async (req,res) => {
    const user  = new User(req.body)
    const result = await user.save()
    res.send(result)

   
})


app.get('/', async (req,res)=>{
    const user = await User.find()
    res.send(user)
})


app.put('/:id', async (req,res)=>{
    const updated = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(updated)
})

const port = 3000
app.listen(port,()=>{
    console.log(`server active at port :${port} `)
   
})