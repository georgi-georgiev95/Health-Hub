import { Request, Response } from "express";

const router = require("express").Router();

router.get("/login", (req: Request, res: Response) => {
  res.json({ message: "Login Page!" });
});

module.exports = router;
