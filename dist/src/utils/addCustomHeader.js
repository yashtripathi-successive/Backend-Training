function addCustomHeader(developedby, name) {
    return (req, res, next) => {
        res.setHeader(developedby, name);
        next();
    };
}
export default addCustomHeader;
//# sourceMappingURL=addCustomHeader.js.map