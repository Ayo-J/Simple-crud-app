import express from "express";
import { connectDb } from "../Infastructure/db.connect";
import { productRoute } from "../api/product";
import { customerRoute } from "../api/customer";




const app = express();
app.use(express.json());

// Connect to MongoDB

connectDb();

// Define the routes


app.use("/product", productRoute)

app.use("/customer",customerRoute)




app.listen(8000, () => console.log("Server is listening on port 8000."));



