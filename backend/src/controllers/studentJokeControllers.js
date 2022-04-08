import { check, validationResult } from "express-validator";
import { Joke } from "../models/jokeModel.js";

export const getStudentJokes = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const studentJokes = await Joke.find();
  res.status(200).send(studentJokes);
};
export const getStudentJokeById = async (req, res) => {
  let studentJoke = await Joke.findById(req.params.id);
  console.log(studentJoke);
  if (!studentJoke) {
    return res.status(404).send(`${req.params.id} not found`);
  }
  res.status(200).send(studentJoke);
};
export const getStudentJokeByTitle = async (req, res) => {
  let studentJoke = await Joke.find({title: req.query.title});
  if (!studentJoke) {
    return res.status(404).send(`${req.query.title} not found`);
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
  studentJoke.save(studentJoke).then((studentJoke) => res.status(201).send(studentJoke));
};

export const editStudentJoke = async (req, res) => {
  let studentJoke = await Joke.findById(req.params.id);
  if (!studentJoke) {
    return res.status(404).send(`${req.params.id} not found`);
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Joke.updateOne({id: req.params.id}, {title: `${req.body.title}`}, {text: `${req.body.text}`});
  res.status(200).send(`Edited ${studentJoke.title} in joke collection`);
};
export const deleteStudentJoke = async (req, res) => {
  let studentJoke = await Joke.findById(req.params.id);
  if (!studentJoke) {
    return res.status(404).send(`${req.params.id} not found`);
  } 
  await Joke.deleteOne({id: req.params.id});
  res.status(200).send(`Deleted ${studentJoke.title} in joke collection`);
};
// attached as second param in a route
export const newStudentJokeValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("text").notEmpty().withMessage("Text field required")
];