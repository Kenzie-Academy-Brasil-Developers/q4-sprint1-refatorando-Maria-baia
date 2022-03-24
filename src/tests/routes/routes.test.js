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

describe("Testing get all companies route", () => {
  it("Should get all companies", async () => {
    const result = await request(app).get("/companies");

    expect(result.statusCode).toBe(200);
    expect(result.body.length).toBe(1);
  });
});
