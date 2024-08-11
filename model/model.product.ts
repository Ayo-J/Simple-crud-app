import { timeStamp } from "console";
import { model } from "mongoose";

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Shema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter product quantity"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  image: {
    type: String,
    required: false
  },

}
{
  timeStamp: true,

}
);


const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;