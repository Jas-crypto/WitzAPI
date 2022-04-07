import { check, validationResult } from "express-validator";
import { Joke } from "../models/jokeModel.js";

export const getFlatJokes = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const flatJokes = await Joke.find();
    res.status(200).send(flatJokes);
};
export const getFlatJokeById = async (req, res) => {
    let flatJoke = await Joke.find((j) => j.id == req.params.id);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.id} not found`);
    }
    res.status(200).send(flatJoke);
};
export const getFlatJokeByTitle = async (req, res) => {
    let flatJoke = await Joke.filter((joke) => joke.title == req.query.title);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.title} not found`);
    }
    res.status(200).send(flatJoke);
};

export const addFlatJoke = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const flatJoke = new Joke({
        title: req.body.title,
        text: req.body.text,
      });
    
    flatJoke.save(flatJoke).then((flatJoke) => res.status(201).send(flatJoke));;
};

export const editFlatJoke = async (req, res) => {
    let flatJoke = await Joke.find((j) => j.id == req.params.id);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.id} not found`);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    Joke.update(req.bod);
    res.status(200).send(`Edited ${flatJoke.title} in joke collection`);
};

export const deleteFlatJoke = async (req, res) => {
    let flatJoke = await Joke.find((j) => j.id == req.params.id);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${flatJoke.id} not found`);
    }
    Joke.deleteOne(req.id);
    res.status(200).send(`Deleted ${flatJoke.title} in joke collection`);
};
// attached as second param in a route
export const newFlatJokeValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("text").notEmpty().withMessage("Text field required")
];