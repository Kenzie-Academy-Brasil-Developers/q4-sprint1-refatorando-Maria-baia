/** @format */

import { companies } from "../services/companies.service";

export const verifyDuplicateCnpj = (req, res, next) => {
  let { cnpj } = req.body;
  let company = companies.find((company) => company.cnpj == cnpj);

  if (company) {
    return res.status(400).json({ message: "CNPJ alrealdy registered" });
  }

  return next();
};
