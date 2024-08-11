import express, { Request, Response } from "express";
import { model } from "mongoose";
import Customer from "../model/model.customers";

export const createCustomer=async(req:Request,res:Response)=>{
  try {
      const customer = (req.body); 
      await Customer.create(customer)// This should work if the model is imported correctly
      res.status(201).json(customer);
    } catch (error) {
      console.error("Error creating Custemer:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }

}