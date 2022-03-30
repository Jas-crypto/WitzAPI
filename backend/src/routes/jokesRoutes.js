import express from "express";
import {
  getJokes,
  getJokeById,
  getJokeByTitle,
  addJoke,
  editJoke,
  deleteJoke,
  newJokeValidators,
} from "../controllers/jokeControllers.js";

const router = express.Router();

router.get("/", getJokes);
router.get("/:id", getJokeById);
router.get("/search", getJokeByTitle);
router.post("/", newJokeValidators, addJoke);
router.put("/:id", newJokeValidators, editJoke);
router.delete("/:id", deleteJoke)

export default router;