/** @format */

import { Router } from "express";

import { authenticateCompany } from "../middlewares/authenticateCompany.middleware";
import { validate } from "../middlewares/validate.middleware";
import { verifyCompanyExistence } from "../middlewares/verifyCompanyExistence.middleware";
import { verifyDuplicateCnpj } from "../middlewares/verifyDuplicateCnpj.middleware";

import { companySchema } from "../models/company.models";

import {
  create,
  login,
  list,
  update,
  destroy,
} from "../controllers/company/company.controller";

const router = Router();

router.post(
  "/companies/register",
  validate(companySchema),
  verifyDuplicateCnpj,
  create
);

router.post("/companies/login", login);

router.get("/companies", list);

router.put(
  "/companies/:cnpj",
  authenticateCompany,
  verifyCompanyExistence,
  update
);

router.delete(
  "/companies/:cnpj",
  authenticateCompany,
  verifyCompanyExistence,
  destroy
);

export default router;
