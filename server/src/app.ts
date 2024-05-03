import { ENV } from "./types/ENV";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv: ENV = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
})

const port: string = process.env.PORT || "4000";

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});