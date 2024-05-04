import { Request, Response } from "express";
import { Workout } from "../types/Workout";

const workoutService = require("../services/workoutService");
const router = require("express").Router();

router.get("/catalog", async (req: Request, res: Response) => {
  const workouts: Workout[] = await workoutService.getAllWorkouts();
  res.status(200).send(workouts);
});

router.post("/add", async (req: Request, res: Response) => {
  const workout: Workout = req.body;
  
  try {
    const newWorkout: Workout = await workoutService.createWorkout(workout);
    res.status(200).send(newWorkout);
  } catch (err) {
    const error = err as Error;
    res.status(400).send({ error: error.message });
  }
})

module.exports = router;
