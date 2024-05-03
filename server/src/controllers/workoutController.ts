import { Request, Response } from "express";

const router = require("express").Router();

router.get("/catalog", (req: Request, res: Response) => {
  res.json({ message: "Workouts Catalog Page!" });
});

module.exports = router;
