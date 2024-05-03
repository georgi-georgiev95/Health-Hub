import { Request, Response } from "express";

const router = require("express").Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
})

module.exports = router;