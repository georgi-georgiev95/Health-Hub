import { Token } from "../types/Token";
import { User } from "../types/User";

const jwt = require("jsonwebtoken");

exports.generateToken = (user: User): Token => {
  const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET,
  );

  return {
    email: user.email,
    authToken: token,
    userId: user._id!,
    username: user.username,
  };
};
