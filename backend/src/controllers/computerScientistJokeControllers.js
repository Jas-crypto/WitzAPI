import { check, validationResult } from "express-validator";
import { joke } from "../models/jokeModel.js";

export const getComputerScientistJokes = (req, res) => {
    res.status(200).send(joke);
};
export const getComputerScientistJokeById = (req, res) => {
    let computerScientistJoke = joke.find((j) => j.id == req.params.id);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.id} not found`);
    }
    res.status(200).send(computerScientistJoke);
};
export const getComputerScientistJokeByTitle = (req, res) => {
    let computerScientistJoke = joke.filter((joke) => joke.title == req.query.title);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.title} not found`);
    }
    res.status(200).send(computerScientistJoke);
};

export const addComputerScientistJoke = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    joke.push(req.bod);
    res.status(201).send(`Added ${req.bod.title} to joke collection`);
};

export const editComputerScientistJoke = (req, res) => {
    let computerScientistJoke = joke.find((j) => j.id == req.params.id);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.id} not found`);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    joke.update(req.bod);
    res.status(200).send(`Edited ${computerScientistJoke.title} in joke collection`);
};

export const deleteComputerScientistJoke = (req, res) => {
    let computerScientistJoke = joke.find((j) => j.id == req.params.id);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.id} not found`);
    }
    joke.deleteOne(req.id);
    res.status(200).send(`Deleted ${computerScientistJoke.title} in joke collection`);
};
// attached as second param in a route
export const newComputerScientistJokeValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("text").notEmpty().withMessage("Text field required")
];