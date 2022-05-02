import express from "express";
import {
    getComputerScientistJokes,
    getComputerScientistJokeById,
    getComputerScientistJokeByTitle,
    addComputerScientistJoke,
    editComputerScientistJoke,
    deleteComputerScientistJoke,
    newComputerScientistJokeValidators,
} from "../controllers/computerScientistJokeControllers.js";



const router = express.Router();

router.get("/", getComputerScientistJokes);
router.get("/:id", getComputerScientistJokeById);
router.get("/search/:title", getComputerScientistJokeByTitle);
router.post("/", newComputerScientistJokeValidators, addComputerScientistJoke);
router.put("/:id", newComputerScientistJokeValidators, editComputerScientistJoke);
router.delete("/:id", deleteComputerScientistJoke);

export default router;