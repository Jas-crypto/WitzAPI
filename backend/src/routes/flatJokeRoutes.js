import express from "express";
import {
    getFlatJokes,
    getFlatJokeById,
    getFlatJokeByTitle,
    addFlatJoke,
    editFlatJoke,
    deleteFlatJoke,
    newFlatJokeValidators,
} from "../controllers/flatJokeControllers.js";

const router = express.Router();

router.get("/", getFlatJokes);
router.get("/:id", getFlatJokeById);
router.get("/search/:title", getFlatJokeByTitle);
router.post("/", newFlatJokeValidators, addFlatJoke);
router.put("/:id", newFlatJokeValidators, editFlatJoke);
router.delete("/:id", deleteFlatJoke);

export default router;