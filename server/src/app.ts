const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB");
})

const port: string = process.env.PORT || "4000";

const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});