import connectDB from '../config/db';
import Country, { countrySchemaInterface } from '../models/Country';

const countries : countrySchemaInterface[] = [
  { name: "Russia", code: "RU" },
  { name: "Japan", code: "JP" },
];

(async function seedCountry() {
  try {
    await connectDB();
    await Country.deleteMany({});
    await Country.insertMany(countries);
    console.log("Countries inserted successfully");
     
  } catch (err) {
    console.error(err);
   
  }
})();
