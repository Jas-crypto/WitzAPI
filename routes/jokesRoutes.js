import express from "express";
import {
  getJokes,
  getJokeById,
  getJokeByTitle,
  addJoke,
  newJokeValidators,
} from "../controllers/jokesControllers.js";

const router = express.Router();

router.get("/", getJokes);
router.get("/:id", getJokeById);
router.get("/search", getJokeByTitle);
router.post("/", newJokeValidators, addJoke);

export default router;