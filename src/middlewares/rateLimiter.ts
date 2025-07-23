import rateLimit from "express-rate-limit";
import { RateLimitRequestHandler } from "express-rate-limit";

function ratelimiter(time:number,req:number): RateLimitRequestHandler{
    return rateLimit({
    windowMs:time,
    max:req,
    message:"too many req in 1 min"
    
   })
}


export default ratelimiter