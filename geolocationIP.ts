import express,{ NextFunction, request, Request, Response } from "express";
import geoip from 'geoip-lite'
const app = express()



const locations:string[] = ['CA','IN','US','UK']


const localhostIps:string[] = ['127.0.0.1', '::1'];
function validateGeoIp(locations:string[]){
    return (req:Request,res:Response,next:NextFunction)=>{
        const ip = req.ip 

        if (!ip) {
         return res.status(400).json({ message: 'IP address not found' })
        }
        if(localhostIps.includes(ip)){
            console.log('local host IP detected')
            return next()
        }
        
        const validIp = geoip.lookup(ip)
        if(!validIp){
            return res.status(400).json({
                message:"not a valid geolocation"
            })
        }

        const validIpCountry = validIp.country
        if(!locations.includes(validIpCountry)){
        return res.status(400).json({
                message:"not a valid ip"
            })
        }

        next()
    }
}


app.get('/validgeoip',validateGeoIp(locations),(req:Request,res:Response)=>{
    
    res.status(201).json({
        message:"valid geolocation"
    })
})

app.listen(7000,()=>{
    console.log('server is active at port 7000')
})