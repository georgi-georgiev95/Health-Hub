const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const port: string = process.env.PORT || "4000";

const app = express();
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});