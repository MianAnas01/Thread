import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectdb.js";
import cookieParser from "cookie-parser";
import userRoutes from "../backend/routes/userRoutes.js";
import postRoute from "../backend/routes/postRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
// import { v2 as cloudinary } from "cloudinary";

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 5000;

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// Middlewares
app.use(express.json({ limit: "50mb" })); // to parse json data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoute);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
