function mockApiDetail(req, res) {
    res.status(201).json({ message: "mock data", users: req.users });
}
export default mockApiDetail;
//# sourceMappingURL=mockApiDetail.js.map