const fetch = require("node-fetch");

/* fetches api data from backend and extracts its json body */
export async function fetchAllFlatJokes() {
  return await fetch("http://localhost:4000/flatJokes", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

export async function fetchAllStudentJokes() {
  return await fetch("http://localhost:4000/studentJokes", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}

export async function fetchAllComputerScientistJokes() {
  return await fetch("http://localhost:4000/computerScientistJokes", {
    mode: "cors",
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res;
    });
}