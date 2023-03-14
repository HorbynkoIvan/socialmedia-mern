import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";//module that loads environment variables from a .env file into process.env
import multer from "multer";
import helmet from "helmet";//secure HTTP headers in an Express.js application
import morgan from "morgan";
import path from "path";
import {fileURLToPath} from "url";

//CONFIGURATION
const __filename = fileURLToPath(import.meta.url)//only for ES6 (type: "module")
const __dirname = path.dirname(__filename)//only for ES6 (type: "module")

dotenv.config()

const app = express()
app.use(express.json);//parses incoming requests with JSON payloads and is based on body-parser
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

// FILE STORAGE
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/assets')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })