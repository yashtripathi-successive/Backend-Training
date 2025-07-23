import jwt from 'jsonwebtoken';
function verifyingAuth(req, res, next) {
    const secretKey = "yash";
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer ")) {
        return res.status(400).json({ message: "Token missing or invalid format" });
    }
    const token = header.split(' ')[1];
    if (!token) {
        return res.status(400).json({ message: "token missing" });
    }
    const data = jwt.verify(token, secretKey);
    console.log(`data is : ${data}`);
    req.user = data;
    next();
}
export default verifyingAuth;
//# sourceMappingURL=verifyingAuth.js.map