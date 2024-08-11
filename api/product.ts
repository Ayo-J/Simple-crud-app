import express from "express"
import { createProduct, getallProduct, getProducts } from "../applications/product";

export const productRoute =express.Router();

productRoute.route("/").get(getallProduct).post(createProduct);

