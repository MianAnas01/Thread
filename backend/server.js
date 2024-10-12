import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectdb.js";
import cookieParser from "cookie-parser";
import userRoutes from "../backend/routes/userRoutes.js";
import postRoute from "../backend/routes/postRoutes.js";

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;
// Middlewares
app.use(express.json()); // to parse json data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoute);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
