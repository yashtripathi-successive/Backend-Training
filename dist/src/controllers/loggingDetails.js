function loggingDetails(req, res) {
    console.log(req.headers);
    res.status(201).json({ message: "details are verified through jwt", user: req.user });
}
export default loggingDetails;
//# sourceMappingURL=loggingDetails.js.map