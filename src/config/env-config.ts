import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
  SERVER_HOST: process.env.SERVER_HOST || "10.0.70.50",
  SERVER_URL: process.env.SERVER_URL || "http://10.0.70.50:5003",
  BASE_URL: process.env.BASE_URL || "http://10.0.70.50:5003/api/v1",
  IMAGE_URL: process.env.SERVER_URL || "http://10.0.70.50:5003",
};
