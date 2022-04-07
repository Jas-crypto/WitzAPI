import { check, validationResult } from "express-validator";
import { Joke } from "../models/jokeModel.js";

export const getStudentJokes = async (req, res) => {
  const studentJokes = await Joke.find();
  res.status(200).send(studentJokes);
};
export const getStudentJokeById = async (req, res) => {
  let studentJoke = await Joke.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  res.status(200).send(studentJoke);
};
export const getStudentJokeByTitle = async (req, res) => {
  let studentJoke = await Joke.filter((joke) => joke.title == req.query.title);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  res.status(200).send(studentJoke);
};

export const addStudentJoke = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const studentJoke = new Joke({
    title: req.body.title,
    text: req.body.text,
  });

  studentJoke.save(studentJoke);
  res.status(201).send(`Added ${req.bod.title} to joke collection`);
};

export const editStudentJoke = async (req, res) => {
  let studentJoke = await Joke.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  Joke.update(req.bod);
  res.status(200).send(`Edited ${studentJoke.title} in joke collection`);
};
export const deleteStudentJoke = async (req, res) => {
  let studentJoke = await Joke.find((j) => j.id == req.params.id);
  if (studentJoke.isEmpty()) {
    return res.status(404).send(`${studentJoke.id} not found`);
  } 
  Joke.deleteOne(req.id);
  res.status(200).send(`Deleted ${studentJoke.title} in joke collection`);
};
// attached as second param in a route
export const newStudentJokeValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("text").notEmpty().withMessage("Text field required")
];