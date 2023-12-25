import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routers/posts.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.port || 5000;

const URI =
  "mongodb+srv://tronghientran18:8RYUu9ZcP9TtaiNQ@cluster0.ehj61xi.mongodb.net/?retryWrites=true&w=majority";

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
