import express from "express";
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors'


import bookRoute from '../Backend/route/book.route.js'
import userRoute from "./route/user.route.js"
 
dotenv.config();
const PORT = process.env.PORT || 4000
const URI = process.env.MongoDBURI
const app = express();
app.use (cors());
app.use(express.json());

  (async () => {
    try {
      mongoose.connect(URI);
      console.log("Connected to MongoDB");
  } catch (error) {
      console.log("Error connecting to MongoDB:", error);
  }
    })()

 // defining routes 
 app.use("/book",bookRoute)
 app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});