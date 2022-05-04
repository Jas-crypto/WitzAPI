import { check, validationResult } from "express-validator";
import { FlatJoke } from "../models/jokeModel.js";

export const getFlatJokes = async(req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const flatJokes = await FlatJoke.find();
    res.status(200).send(flatJokes);
};
export const getFlatJokeById = async(req, res) => {
    let flatJoke = await FlatJoke.findById(req.params.id);
    if (!flatJoke) {
        return res.status(404).send(`${req.params.id} not found`);
    }
    res.status(200).send(flatJoke);
};
export const getFlatJokeByTitle = async(req, res) => {
    let flatJoke = await FlatJoke.find({ title: req.params.title });
    if (!flatJoke) {
        return res.status(404).send(`${req.query.title} not found`);
    }
    res.status(200).send(flatJoke);
};

export const addFlatJoke = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const flatJoke = new FlatJoke({
        title: req.body.title,
        text: req.body.text,
    });

    flatJoke.save(flatJoke).then((flatJoke) => res.status(201).send(flatJoke));
};

export const editFlatJoke = async(req, res) => {
    let flatJoke = await FlatJoke.findById(req.params.id);
    if (flatJoke.isEmpty()) {
        return res.status(404).send(`${req.params.id} not found`);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    await FlatJoke.updateOne({ id: req.params.id }, {
        $set: {
            title: req.body.title,
            text: req.body.text
        }
    });
    res.status(200).send(`Edited ${flatJoke.title} in joke collection`);
};

export const deleteFlatJoke = async(req, res) => {
    let flatJoke = await FlatJoke.findById(req.params.id);
    if (!flatJoke) {
        return res.status(404).send(`${req.params.id} not found`);
    }
    await FlatJoke.deleteOne({ id: req.params.id });
    res.status(200).send(`Deleted ${flatJoke.title} in joke collection`);
};
// attached as second param in a route
export const newFlatJokeValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("text").notEmpty().withMessage("Text field required")
];