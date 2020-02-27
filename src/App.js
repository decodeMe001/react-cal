import React, { Component } from 'react'
import './App.css';
import CalculatorBoard from './components/CalculatorBoard';


class App extends Component {

  render() {
    return (
      <div className="App">
        <CalculatorBoard />
      </div>
    )
  }
}

export default App;
