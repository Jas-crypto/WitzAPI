import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema( {
  title: String,  
  text: String
});

export const ComputerScientistJoke = mongoose.model("ComputerScientistJoke", jokeSchema);
export const studentJoke = mongoose.model("StudentJoke", jokeSchema);
export const FlatJoke = mongoose.model("FlatJoke", jokeSchema);

