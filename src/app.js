/** @format */

import express from "express";
import router from "./routes/company.routes.js";
import routerVehicle from "./routes/vehicle.routes.js";
import expressListRoutes from "express-list-routes";

const app = express();

app.use(express.json());
app.use("", router, routerVehicle);

expressListRoutes(app);

export default app;
