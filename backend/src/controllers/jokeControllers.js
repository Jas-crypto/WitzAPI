import { check, validationResult } from "express-validator";
import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema( {
  title: String,  
  text: String,
  category: String
});

const jokes= await jokes.find();

export const getJokes = (req, res) => {
  res.status(200).send(jokes);
};
export const getJokeById = (req, res) => {
  let joke = jokes.find((j) => j.id == req.params.id);
  if (joke.isEmpty()) {
    return res.status(404).send(`${joke.id} not found`);
  } 
  res.status(200).send(joke);
};
export const getJokeByTitle = (req, res) => {
  let result = jokes.filter((joke) => joke.title == req.query.title);
  if (joke.isEmpty()) {
    return res.status(404).send(`${joke.title} not found`);
  } 
  res.status(200).send(result);
};

export const addJoke = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  jokes.push(req.bod);
  res.status(201).send(`Added ${joke.title} to joke collection`);
};
export const editJoke=(req, res) => {
  let joke = jokes.find((j) => j.id == req.params.id);
  if (joke.isEmpty()) {
    return res.status(404).send(`${joke.id} not found`);
  } 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  jokes.update(req.bod);
  res.status(201).send(`Edited ${joke.title} in joke collection`);
};
export const deleteJoke= (req, res) => {
  let joke = jokes.find((j) => j.id == req.params.id);
  if (joke.isEmpty()) {
    return res.status(404).send(`${joke.id} not found`);
  } 
  jokes.deleteOne(req.id);
  res.status(201).send(`Deleted ${joke.title} in joke collection`);
};
// attached as second param in a route
export const newJokeValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("text").notEmpty().withMessage("Text field required"),
  check("category").notEmpty().withMessage("Category field required")
];