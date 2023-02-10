import { connectToMongo } from "./db.js";
import app from "./index.js";
import dotenv from "dotenv";


dotenv.config();
connectToMongo();
const server = await app.listen(process.env.PORT);
if (server) { console.log("Listening at PORT , " + process.env.PORT) }
else { console.log(server) }













