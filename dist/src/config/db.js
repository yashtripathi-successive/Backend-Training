import mongoose from 'mongoose';
async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/successivedb');
        console.log('database connected');
    }
    catch (err) {
        console.log(err);
    }
}
export default connectDB;
//# sourceMappingURL=db.js.map