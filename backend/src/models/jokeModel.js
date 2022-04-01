import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema( {
  title: String,  
  text: String
});

export const joke = mongoose.model("Joke", jokeSchema);

