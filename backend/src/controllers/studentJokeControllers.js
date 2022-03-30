import { check, validationResult } from "express-validator";
import jokes from "../models/jokeModel.js";

export const getStudentJokes = (req, res) => {
  res.status(200).send(jokes);
};
export const getStudentJokeById = (req, res) => {
  let studentJoke = jokes.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  res.status(200).send(studentJoke);
};
export const getStudentJokeByTitle = (req, res) => {
  let studentJoke = jokes.filter((joke) => joke.title == req.query.title);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  res.status(200).send(studentJoke);
};

export const addStudentJoke = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  jokes.push(req.bod);
  res.status(201).send(`Added ${req.bod.title} to joke collection`);
};

export const editStudentJoke=(req, res) => {
  let studentJoke = jokes.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  jokes.update(req.bod);
  res.status(201).send(`Edited ${studentJoke.title} in joke collection`);
};
export const deleteStudentJoke= (req, res) => {
  let studentJoke = jokes.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  jokes.deleteOne(req.id);
  res.status(201).send(`Deleted ${studentJoke.title} in joke collection`);
};
// attached as second param in a route
export const newStudentJokeValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("text").notEmpty().withMessage("Text field required")
];