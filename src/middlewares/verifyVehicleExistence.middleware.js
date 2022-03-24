/** @format */

import { companies } from "../services/companies.service";

export const verifyVehicleExistence = (req, res, next) => {
  let { plate } = req.params;
  let vehicle = companies.some((company) =>
    company.vehicles.some((vehicle) => vehicle.plate === plate)
  );

  if (!vehicle) {
    return res.status(400).json({ message: "vehicle ot registered" });
  }

  req.vehicle = vehicle;

  return next();
};
