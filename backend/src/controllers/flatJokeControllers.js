import { check, validationResult } from "express-validator";
import jokes from "../models/jokeModel.js";

export const getFlatJokes = (req, res) => {
    res.status(200).send(jokes);
};
export const getFlatJokeById = (req, res) => {
    let flatJoke = jokes.find((j) => j.id == req.params.id);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.id} not found`);
    }
    res.status(200).send(flatJoke);
};
export const getFlatJokeByTitle = (req, res) => {
    let flatJoke = jokes.filter((joke) => joke.title == req.query.title);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.title} not found`);
    }
    res.status(200).send(flatJoke);
};

export const addFlatJoke = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    jokes.push(req.bod);
    res.status(201).send(`Added ${req.bod.title} to joke collection`);
};

export const editFlatJoke = (req, res) => {
    let flatJoke = jokes.find((j) => j.id == req.params.id);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.id} not found`);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    jokes.update(req.bod);
    res.status(201).send(`Edited ${flatJoke.title} in joke collection`);
};
export const deleteFlatJoke = (req, res) => {
    let flatJoke = jokes.find((j) => j.id == req.params.id);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.id} not found`);
    }
    jokes.deleteOne(req.id);
    res.status(201).send(`Deleted ${flatJoke.title} in joke collection`);
};
// attached as second param in a route
export const newFlatJokeValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("text").notEmpty().withMessage("Text field required")
];