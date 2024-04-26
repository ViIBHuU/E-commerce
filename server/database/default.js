import Products from "./model/productSchema.js";
import { products } from "./constants/data.js";

const DefData = async () => {
    try {
        await Products.deleteMany({});
        await Products.insertMany(products);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefData;