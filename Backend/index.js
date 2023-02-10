import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { createError } from "./utils/Error.js";
import ProductRouter from "./routers/ProductRouter.js";


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "https://emartproject.vercel.app", methods: ["GET", "POST", "PUT", "DELETE"] }));

app.use("/api/v1/products", ProductRouter);

app.use('/', createError)


export default app;

