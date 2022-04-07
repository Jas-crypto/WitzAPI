import { check, validationResult } from "express-validator";
import { Joke } from "../models/jokeModel.js";

export const getComputerScientistJokes = async (req, res) => {
    const computerScientistJoke = await Joke.find();
    res.status(200).send(computerScientistJoke);
};
export const getComputerScientistJokeById = async (req, res) => {
    let computerScientistJoke = await Joke.find((j) => j.id == req.params.id);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.id} not found`);
    }
    res.status(200).send(computerScientistJoke);
};
export const getComputerScientistJokeByTitle = async (req, res) => {
    let computerScientistJoke = await Joke.filter((joke) => joke.title == req.query.title);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.title} not found`);
    }
    res.status(200).send(computerScientistJoke);
};

export const addComputerScientistJoke = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const computerScientistJoke = new Joke({
        title: req.body.title,
        text: req.body.text,
      });
    
    computerScientistJoke.save(computerScientistJoke).then((todo) => res.status(201).send(todo));;
    res.status(201).send(`Added ${req.bod.title} to joke collection`);
};

export const editComputerScientistJoke = async (req, res) => {
    let computerScientistJoke = await Joke.find((j) => j.id == req.params.id);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.id} not found`);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    Joke.update(req.bod);
    res.status(200).send(`Edited ${computerScientistJoke.title} in joke collection`);
};

export const deleteComputerScientistJoke = async (req, res) => {
    let computerScientistJoke = await Joke.find((j) => j.id == req.params.id);
    if (computerScientistJoke.isEmpty()) {
        return res.status(404).send(`${computerScientistJoke.id} not found`);
    }
    Joke.deleteOne(req.id);
    res.status(200).send(`Deleted ${computerScientistJoke.title} in joke collection`);
};
// attached as second param in a route
export const newComputerScientistJokeValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("text").notEmpty().withMessage("Text field required")
];