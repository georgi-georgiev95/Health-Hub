import { Request, Response } from "express";

const router = require("express").Router();
const userController = require("./controllers/userController");
const recipeController = require("./controllers/recipeController");

router.use("/users", userController);
router.use("/recipes", recipeController);
router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
})

module.exports = router;