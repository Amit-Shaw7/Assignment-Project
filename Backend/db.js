import mongoose from "mongoose";

mongoose.set('strictQuery', true);
export const connectToMongo = async () => {
    // console.log(process.env.MONGO_URI);
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        if (connection) {
            console.log("Connected to database");
        }
    } catch (error) {
        console.log(error.message);
    }
}