const Workout = require("../models/Workout");
import { Workout } from "../types/Workout";

exports.getAllWorkouts = (): Promise<Workout[]> => Workout.find({});
exports.createWorkout = (workout: Workout): Promise<Workout> => Workout.create(workout);