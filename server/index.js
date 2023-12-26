import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.DATABASE_URL);
const URI = `${process.env.DATABASE_URL}`;

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

// , { useNewUrlParser: true, useUnifiedTopology: true }
mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to DB");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
