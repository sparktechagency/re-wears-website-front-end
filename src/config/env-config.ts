import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
  SERVER_HOST: process.env.SERVER_HOST,
  SERVER_URL: process.env.SERVER_URL,
  BASE_URL: process.env.BASE_URL,
};

export const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL || "http://10.0.70.188:5005";