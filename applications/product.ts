import express, { Request, Response } from "express";
import { model } from "mongoose";
import Product from "../model/model.product";




export const getProducts=(req:Request,res:Response)=>{
    res.send("Hello World");
}
export const createProduct=async(req:Request,res:Response)=>{
    try {
        const product = (req.body); 
        await Product.create(product)// This should work if the model is imported correctly
        res.status(201).json(product);
      } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
      }

}

export const getallProduct=async(req:Request,res:Response)=>{
    const product = await Product.find();
    return res.status(200).json(product); 

  


}