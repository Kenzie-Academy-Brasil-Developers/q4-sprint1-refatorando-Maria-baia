/** @format */

import jwt from "jsonwebtoken";
import { config } from "../configs/Jwt.js";

export const authenticateCompany = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Missing authorization" });
  }

  let token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token." });
    } else {
      return next();
    }
  });
};
