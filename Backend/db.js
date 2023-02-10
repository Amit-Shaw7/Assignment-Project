import mongoose from "mongoose";

mongoose.set('strictQuery', true);
export const connectToMongo = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI_LOCAL);
        if (connection) {
            console.log("Connected to database");
        }
    } catch (error) {
        console.log(error.message);
    }
}