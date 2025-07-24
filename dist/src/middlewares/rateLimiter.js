import rateLimit from "express-rate-limit";
function ratelimiter(time, req) {
    return rateLimit({
        windowMs: time,
        max: req,
        message: "too many req in 1 min"
    });
}
export default ratelimiter;
//# sourceMappingURL=rateLimiter.js.map