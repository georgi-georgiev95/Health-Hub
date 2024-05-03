import { Request, Response } from "express";
import { UserData } from "../types/User";
import { Token } from "../types/Token";

const userService = require("../services/userService");
const router = require("express").Router();

router.post("/login", async (req: Request, res: Response): Promise<void> => {
  const userData: UserData = req.body;
  try {
    const token: Token = await userService.login(userData);
    const cookieName = process.env.COOKIE_NAME!;
    res.cookie(cookieName, token.authToken, { httpOnly: true, secure: true });
    res.status(200).send({email: token.email, userId: token.userId, username: token.username});
  } catch (err) {
    const error = err as Error;
    // res.status(400).send({ error: error.message });
    res.status(400).send({ error: "Invalid email or password" });
  }

});

router.post("/register", async (req: Request, res: Response): Promise<void> => {
  const userData: UserData = req.body;
  try {
    const newUser: Token = await userService.register(userData);
    const cookieName = process.env.COOKIE_NAME!;
    res.cookie(cookieName, newUser.authToken, { httpOnly: true, secure: true });
    res.status(200).send({email: newUser.email, userId: newUser.userId, username: newUser.username});
  } catch (err) {
    const error = err as Error;
    res.status(400).send({error: error.message});
  }
})

module.exports = router;
