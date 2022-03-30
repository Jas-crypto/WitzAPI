import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema( {
  title: String,  
  text: String,
  category: String
});

const jokes= await jokes.find();
