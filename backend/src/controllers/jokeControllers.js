import { check, validationResult } from "express-validator";

const jokes = [
  {
    id: 0,
    title: "Project Hail Mary",
    text: "Andy Weir",
    pages: 496,
  },
  {
    id: 1,
    title: "Harrow the Ninth",
    text: "Tamsyn Muir",
    pages: 512,
  },
];
export const getJokes = (req, res) => {
  res.status(200).send(jokes);
};
export const getJokeById = (req, res) => {
  //fehlermeldung 404 einfügen, ob Joke existiert
  let joke = jokes.find((j) => j.id == req.params.id);
  res.status(200).send(joke);
};
export const getJokeByTitle = (req, res) => {
  let result = jokes.filter((joke) => joke.title == req.query.title);
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

// attached as second param in a route
export const newJokeValidators = [
  check("title").notEmpty().withMessage("Title field required"),
  check("text").notEmpty().withMessage("Text field required"),
];