import connectDB from '../config/db';
import Country, { countrySchemaInterface } from '../models/Country';

const countries : countrySchemaInterface[] = [
  { name: "India", code: "IN" },
  { name: "Uk", code: "UK" },
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
