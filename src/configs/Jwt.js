/** @format */
import dotenv from "dotenv";

dotenv.config();

export const config = {
  secret: process.env.JWT_SECRET,
  expiresIn: "604800",
};
