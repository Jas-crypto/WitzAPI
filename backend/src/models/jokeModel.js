import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema( {
  title: String,  
  text: String
});

export const Joke = mongoose.model("Joke", jokeSchema);

