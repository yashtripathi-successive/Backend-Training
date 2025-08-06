import express, { Request, Response } from 'express'
import writeRequestObject from './middlewares/writeRequestObject'
import customHeader from './middlewares/customHeader';
import rateLimiter from './middlewares/rateLimiter';
import globalErrorHandler from './middlewares/errorHandler';
import mockApiData from './middlewares/getSeededData';
import generateMockData from './middlewares/postSeededData';
import userdata from './randomData'
import jwt from 'jsonwebtoken'
import authentication from './middlewares/authentication';
import user from './randomData';
import bodyParser from 'body-parser';
import { middleware1, middleware2 } from './middlewares/chaining';

export const secretKey = "yash"
const app = express()
app.set('trust proxy', true);
app.use(bodyParser.json())
app.use(express.json())
//app.use(rateLimiter(60*1000,10))
app.use(writeRequestObject)
app.use(customHeader('Developed-By','Yash'));

app.get('/getdetails',middleware1,middleware2,(req:Request,res:Response)=>{
    res.status(201).json({
        message:"all ok"
    })
})

app.get('/mockapidata',mockApiData(20),(req,res,next)=>{
    res.status(201).json(req.users)
})



app.post('/generatemockdata',generateMockData(), (req,res)=>{
   
    res.status(201).json(req.users)
})



app.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email !== userdata.email || password !== userdata.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }


  const token = jwt.sign(userdata, secretKey);

  res.json({ token });
});


app.get("/profile", authentication, (req: Request, res: Response) => {
  res.json({ message:"all ok" , user});
});

app.use(globalErrorHandler)
app.listen(3000,()=>{
    console.log(`server active at port 3000`)
})