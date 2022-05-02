import { check, validationResult } from "express-validator";
import { Joke } from "../models/jokeModel.js";

export const getComputerScientistJokes = async (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3000");
    const computerScientistJoke = await Joke.find();
    res.status(200).send(computerScientistJoke);
};
export const getComputerScientistJokeById = async (req, res) => {
    let computerScientistJoke = await Joke.findById(req.params.id);
    if (!computerScientistJoke) {
        return res.status(404).send(`${req.params.id} not found`);
    }
    res.status(200).send(computerScientistJoke);
};
export const getComputerScientistJokeByTitle = async (req, res) => {
    let computerScientistJoke = await Joke.find({title: req.query.title});
    if (!computerScientistJoke) {
        return res.status(404).send(`${req.query.title} not found`);
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
    
    computerScientistJoke.save(computerScientistJoke).then((computerScientistJoke) => res.status(201).send(computerScientistJoke));
};

export const editComputerScientistJoke = async (req, res) => {
    let computerScientistJoke = await Joke.findById(req.params.id);
    if (!computerScientistJoke) {
        return res.status(404).send(`${req.params.id} not found`);
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    await Joke.updateOne({id: req.params.id},{
        $set:{
            title: req.body.title, text: req.body.text
        }
    });
    res.status(200).send(`Edited ${computerScientistJoke.title} in joke collection`);
};

export const deleteComputerScientistJoke = async (req, res) => {
    let computerScientistJoke = await Joke.findById(req.params.id);
    if (!computerScientistJoke) {
        return res.status(404).send(`${req.params.id} not found`);
    }
    await Joke.deleteOne({id: req.params.id});
    res.status(200).send(`Deleted ${computerScientistJoke.title} in joke collection`);
};
// attached as second param in a route
export const newComputerScientistJokeValidators = [
    check("title").notEmpty().withMessage("Title field required"),
    check("text").notEmpty().withMessage("Text field required")
];