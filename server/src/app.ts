import { ENV } from "./types/ENV";

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const router = require("./routes");

const dotenv: ENV = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
})

const port: string = process.env.PORT || "4000";

const app = express();
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});