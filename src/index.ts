import express from "express";
import { connectDb } from "../Infastructure/db.connect";




const app = express();
app.use(express.json());

// Connect to MongoDB

connectDb();


app.listen(8000, () => console.log("Server is listening on port 8000."));



