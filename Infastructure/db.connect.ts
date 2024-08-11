import express from "express";
import mongoose from 'mongoose';
import 'dotenv/config';

// Define the connectDb function
export const connectDb = async () => {
  try {
    const connectionStr = process.env.MONGO_URI;
    if (!connectionStr) {
      throw new Error("Please add the connection string in the .env file");
    } else {
      await mongoose.connect(connectionStr);
      console.log("Connected to MongoDB");
    }
  } catch (err) {
    console.log(err);
    throw new Error("Error connecting to the database");
  }
};