/** @format */

import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../../app";

const company = {
  name: "Maria's",
  password: "12345678",
  cep: "12345678",
  address: "Rua Criciúma",
  number: 1,
  state: "AM",
  city: "Manaus",
};

const response = { error: "Campo de cnpj obrigatório" };

describe("Testing yup form", () => {
  it("Should not be able to create a company without cnpj", async () => {
    const result = await request(app)
      .post("/companies/register")
      .setEncoding(company);
    expect(result.statusCode).toBe(400);
    expect(result.body).toStrictEqual(response);
  });
});
