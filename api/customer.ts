import express from "express"
import { createCustomer } from "../applications/customers";

export const customerRoute = express.Router();
customerRoute.route("/").post(createCustomer);