/** @format */

import { Router } from "express";

import { authenticateCompany } from "../middlewares/authenticateCompany.middleware";
import { verifyCompanyExistence } from "../middlewares/verifyCompanyExistence.middleware";
import { verifyDuplicateVehiclePlate } from "../middlewares/verifyDuplicateVehiclePlate.middleware";
import { validate } from "../middlewares/validate.middleware";
import { verifyVehicleExistence } from "../middlewares/verifyVehicleExistence.middleware";

import { vehicleSchema } from "../models/vehicle.models";

import { createVehicle } from "../controllers/vehicle/vehicle.controller";
import { listVehicle } from "../controllers/vehicle/vehicle.controller";
import { updateVehicle } from "../controllers/vehicle/vehicle.controller";
import { destroyVehicle } from "../controllers/vehicle/vehicle.controller";

const routerVehicle = Router();

routerVehicle.post(
  "/companies/:cnpj/vehicles",
  authenticateCompany,
  verifyCompanyExistence,
  verifyDuplicateVehiclePlate,
  validate(vehicleSchema),
  createVehicle
);

routerVehicle.get(
  "/companies/:cnpj/vehicles",
  authenticateCompany,
  verifyCompanyExistence,
  listVehicle
);

routerVehicle.put(
  "/companies/:cnpj/vehivles/:plate",
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  updateVehicle
);

routerVehicle.delete(
  "/companies/:cnpj/vehicles/:plate",
  authenticateCompany,
  verifyCompanyExistence,
  verifyVehicleExistence,
  destroyVehicle
);

export default routerVehicle;
