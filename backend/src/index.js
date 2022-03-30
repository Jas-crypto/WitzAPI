import express from "express";
import bodyParser from "body-parser";
import computerScientistJokeRoutes from "./routes/computerScientistJokeRoutes.js";
import studentJokeRoutes from "./routes/studentJokeRoutes.js";
import flatJokeRoutes from "./routes/flatJokeRoutes.js";
import mongoose from "mongoose";

// complete application is here
const app = express();
const port = 4000;

app.use(bodyParser.json());

//routes are /jokes & everything else throws a 404
app.use("/computerScientistJokes", computerScientistJokeRoutes);
app.use("/studentJokes", studentJokeRoutes);
app.use("/flatJokes", flatJokeRoutes);
app.all("*", (req, res) => res.sendStatus(404));

mongoose.connect("mongodb://mongo:27017/test").then(() => {
    console.log("Database connected");
});

app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});