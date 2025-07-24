import connectDB from '../config/db';
import Country from '../models/Country';
const countries = [
    { name: "India", code: "IN" },
    { name: "USA", code: "US" },
];
(async function seedCountry() {
    try {
        await connectDB();
        await Country.deleteMany({});
        await Country.insertMany(countries);
        console.log("Countries inserted successfully");
    }
    catch (err) {
        console.error(err);
    }
})();
//# sourceMappingURL=seedCountry.js.map