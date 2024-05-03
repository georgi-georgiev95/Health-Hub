import mongoose, { Document } from "mongoose";
const bcrypt = require("bcrypt");

interface UserDocument extends Document {
  username: string;
  email: string;
  password: string;
  likedRecipes: mongoose.Types.ObjectId[];
  likedWorkouts: mongoose.Types.ObjectId[];
  recipeComments: mongoose.Types.ObjectId[];
  workoutComments: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedRecipes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
    },
  ],
  likedWorkouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],
  recipeComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  workoutComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

userSchema.pre<UserDocument>("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
