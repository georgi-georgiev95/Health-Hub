const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/generateToken");
import { Token } from "../types/Token";
import { User } from "../types/User";

exports.register = async (userData: User): Promise<Token> => {
    const user: User = await User.findOne({ email: userData.email });
    
    if (user) {
        throw new Error("User already exists");
    }

    if (userData.password !== userData.rePassword) {
        throw new Error("Passwords do not match");
    }

    const newUser: User = await User.create(userData);

    return generateToken(newUser);
};

exports.login = async (userData: User): Promise<Token> => {
    const user: User = await User.findOne({ email: userData.email });

    if (!user) {
        throw new Error("Wrong email or password!");
    }

    const isMatch: boolean = await bcrypt.compare(userData.password, user.password);

    if (!isMatch) {
        throw new Error("Wrong email or password!");
    }

    return generateToken(user);
}

