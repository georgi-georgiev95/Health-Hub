import { Request, Response } from "express";

const router = require("express").Router();
const userController = require("./controllers/userController");

router.use("/users", userController);
router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
})

module.exports = router;