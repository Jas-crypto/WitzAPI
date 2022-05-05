import React from "react";
import { fetchAllFlatJokes, fetchAllStudentJokes, fetchAllComputerScientistJokes } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      flatJokes: [],
      studentJokes: [],
      computerScientistJokes: []
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data1 = await fetchAllFlatJokes();
    let data2 = await fetchAllStudentJokes();
    let data3 = await fetchAllComputerScientistJokes();
    this.setState({ flatJokes: data1, studentJokes: data2, computerScientistJokes: data3 });
  }

  // this is displayed on the screen
  render() {
    return (
      <div>
        <div id="title"> Jokes </div>
        <button id="fetcher" onClick={this.fetchDisplayData}>
          Check out what's in store
        </button>
        <div className="data">
          <div>Flachwitze</div>
          {/* generates a div for every entry */}
          {this.state.flatJokes.map((flatJokes, key) => (
            <div key={key}>
              {flatJokes.title} : {flatJokes.text}
            </div>
          ))}
          <div>Studentenwitze</div>
          {/* generates a div for every entry */}
          {this.state.studentJokes.map((studentJokes, key) => (
            <div key={key}>
              {studentJokes.title} : {studentJokes.text}
            </div>
          ))}
          <div>Informatikerwitze</div>
          {/* generates a div for every entry */}
          {this.state.computerScientistJokes.map((computerScientistJokes, key) => (
            <div key={key}>
              {computerScientistJokes.title} : {computerScientistJokes.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;