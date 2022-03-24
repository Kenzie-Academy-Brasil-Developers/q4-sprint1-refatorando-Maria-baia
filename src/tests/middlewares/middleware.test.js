/** @format */

import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import app from "../../app";

const company = {
  name: "Maria's",
  cnpj: "00000000000000",
  password: "12345678",
  cep: "12345678",
  address: "Rua Criciúma",
  number: 1,
  state: "AM",
  city: "Manaus",
};

describe("Testing Middleware", () => {
  it("Should create a company", async () => {
    const result = await request(app).post("/companies/register").send(company);
    expect(result.statusCode).toBe(201);
  });
});
