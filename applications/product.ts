import express, { Request, Response } from "express";


export const getProducts=(req:Request,res:Response)=>{
    res.send("Hello World");
}