import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";//module that loads environment variables from a .env file into process.env
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import {fileURLToPath} from "url";

//CONFIGURATION
const __filename = fileURLToPath(import.meta.url)//only for ES6 (type: "module")
const __dirname = path.dirname(__filename)//only for ES6 (type: "module")

dotenv.config()

const app = express()