import React, { Component } from 'react';
import { getMovies } from '../apiCall'
import './App.css';

class App extends Component {
  componentDidMount() {
    const results = getMovies();
    console.log(results)
  }

  render() {
    return (
      <div className="App">
        <p>Movie Tracker</p>
      </div>
    );
  }
}

export default App;
