import rateLimit from 'express-rate-limit'

function rateLimiter(time:number,requests:number){
    return rateLimit({
    windowMs:time,
    max:requests,
    message:"rate limit is exceeded"
    
    }) 
}

export default rateLimiter