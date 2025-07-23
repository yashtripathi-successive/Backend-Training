async function asyncError(req, res, next) {
    try {
        await new Promise((resolve, reject) => {
            reject("intentional error");
        });
    }
    catch (err) {
        next(err);
    }
}
export default asyncError;
//# sourceMappingURL=asyncError.js.map