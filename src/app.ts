import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import {
  errorLogger,
  errorResponder,
  requestLogger,
} from "./middlewares/ErrorHandler";
import routesV1 from "./routes/v1";
import ConnectDB from "./config/DBConnect";
import { HttpCode } from "./interface/server.interface";
import { AppError } from "./core/AppError";
import cors from "cors";

// load config paths
dotenv.config({ path: "src/config/.env" });

// connnect DB
ConnectDB();

// initialize app
const app = express();

// setup middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);

//  setup routes v1 routes
app.use("/v1", routesV1);

// // No matching routes
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(
    new AppError({
      httpCode: HttpCode.BAD_REQUEST,
      description: `Request no route to ${req.originalUrl} not found`,
    })
  );
});

// error handling middleware
app.use(errorLogger);
app.use(errorResponder);

// Add headers to prevent cors
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", ["http://localhost:3000"]);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-type,X-auth-token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)

  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Pass to next layer of middleware
  next();
});

export default app;
