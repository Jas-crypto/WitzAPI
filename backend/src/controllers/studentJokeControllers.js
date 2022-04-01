import { check, validationResult } from "express-validator";
import { joke } from "../models/jokeModel.js";

export const getStudentJokes = (req, res) => {
  res.status(200).send(joke);
};
export const getStudentJokeById = (req, res) => {
  let studentJoke = joke.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  res.status(200).send(studentJoke);
};
export const getStudentJokeByTitle = (req, res) => {
  let studentJoke = joke.filter((joke) => joke.title == req.query.title);
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
  joke.push(req.bod);
  res.status(201).send(`Added ${req.bod.title} to joke collection`);
};

export const editStudentJoke=(req, res) => {
  let studentJoke = joke.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  joke.update(req.bod);
  res.status(200).send(`Edited ${studentJoke.title} in joke collection`);
};
export const deleteStudentJoke= (req, res) => {
  let studentJoke = joke.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  joke.deleteOne(req.id);
  res.status(200).send(`Deleted ${studentJoke.title} in joke collection`);
};
// attached as second param in a route
export const newStudentJokeValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("text").notEmpty().withMessage("Text field required")
];