import express from "express"
import { getProducts } from "../applications/product";

export const productRoute =express.Router();

productRoute.route("/").get(getProducts)

