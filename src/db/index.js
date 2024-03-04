import mongoose from 'mongoose';
import {DB_NAME} from "../constants.js"

console.log(process.env.PORT)
const connectDB = async () => {
    try {
        const connectionObject = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MOngoDB connected !! DBHOST:
        ${connectionObject.connection.host}`)
    }
    catch (error){
        console.log("ERRROR:",error);
        process.exit(1)
    }
}
export default connectDB