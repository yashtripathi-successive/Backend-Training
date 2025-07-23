import jwt from 'jsonwebtoken';
function auth(req, res, next) {
    const userData = { name: "yash", age: 21 };
    const secretKey = "yash";
    const token = jwt.sign(userData, secretKey);
    console.log(`token is : ${token}`);
    res.status(201).json({ token });
}
export default auth;
//# sourceMappingURL=auth.js.map