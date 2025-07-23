const users = {};
export function loginRegisterCheck(req, res, next) {
    const registerError = {};
    const { email, password } = req.body;
    if (!email) {
        // res.status(400).json({message:"email is required"})
        registerError.email = "email is equired";
    }
    if (!password) {
        // res.status(400).json({message:"password is required"})
        registerError.password = "password is equired";
    }
    if (users[email]) {
        // res.status(400).json({message:"user already exists"})
        registerError.email = "user already exists";
    }
    if (Object.keys(registerError).length > 0) {
        return res.status(400).json({ message: "errors found in register", registerError });
    }
    users[email] = { password };
    res.status(201).json({ message: "user created successfully" });
}
export function verifyLogin(req, res, next) {
    const loginError = {};
    const { email, password } = req.body;
    if (!email) {
        // res.status(400).json({message : "email is invalid"})
        loginError.email = "email is inavlid";
    }
    if (!password) {
        //  res.status(400).json({message: "password is invalid"})
        loginError.password = "password is invalid";
    }
    if (users[email] && users[email].password !== password) {
        //  res.status(400).json({message : "email or password is wrong"})
        loginError.email = "email or password is wrong";
    }
    if (Object.keys(loginError).length > 0) {
        return res.status(400).json({ message: "errors found in login", loginError });
    }
    next();
}
//# sourceMappingURL=loginRegisterCheck.js.map