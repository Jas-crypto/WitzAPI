import express from "express";
import{
    getStudentJokes,
    getStudentJokeById,
    getStudentJokeByTitle,
    addStudentJoke,
    editStudentJoke,
    deleteStudentJoke,
    newStudentJokeValidators,
  }from "../controllers/studentJokeControllers.js";

  const router = express.Router();

  router.get("/", getStudentJokes);
  router.get("/:id", getStudentJokeById);
  router.get("/search", getStudentJokeByTitle);
  router.post("/", newStudentJokeValidators, addStudentJoke);
  router.put("/:id", newStudentJokeValidators, editStudentJoke);
  router.delete("/:id", deleteStudentJoke);
  
  export default router;