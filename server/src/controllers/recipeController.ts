import { Request, Response } from "express";

const router = require("express").Router();

router.get("/catalog", (req: Request, res: Response) => {
  res.json({ message: "Recipe Catalog Page!" });
});

module.exports = router;
