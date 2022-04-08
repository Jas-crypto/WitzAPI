import React from "react";
import { fetchAllFlatJokes } from "./RestClient";
class App extends React.Component {
  // constructor initializes component state data
  // and binds methods
  constructor(props) {
    super(props);
    this.state = {
      flatJokes: [],
    };
    this.fetchDisplayData = this.fetchDisplayData.bind(this);
  }

  // requests and waits for data by calling RestClient's
  // fetchAllBooks. as soon as the data is there it is set
  // as a state
  async fetchDisplayData() {
    let data = await fetchAllFlatJokes();
    this.setState({ flatJokes: data });
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
          {/* generates a div for every entry */}
          {this.state.flatJokes.map((flatJokes, key) => (
            <div key={key}>
              {flatJokes.title} by {flatJokes.text}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;