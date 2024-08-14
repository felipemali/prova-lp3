import express from "express";
import cors from "cors";
import logger from "morgan";
//prova-felipe
import { connectToDB } from "./config/db";
import { showRouter } from "./routes/shows";

connectToDB();

export const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/shows", showRouter);
//prova-felipe
