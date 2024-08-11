import express from "express"
import { createProduct, deleteProducts, getallProduct, getProductById, getProducts, updateProduct } from "../applications/product";

export const productRoute =express.Router();

productRoute.route("/").get(getallProduct).post(createProduct);
productRoute.route("/:id").get(getProductById).put(updateProduct).delete(deleteProducts);

