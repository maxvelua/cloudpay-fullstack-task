import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import companyRoutes from "./api/companies";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(
  cors({
    origin: process.env.CORS_ORIGINS,
  })
);

app.use("/api/companies", companyRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
