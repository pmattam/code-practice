import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      value: ''
    }
  }
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let splitArray = this.state.value.split('');
    var arr = splitArray.map(eachLetter => {
        if (eachLetter === 'a') {
            return eachLetter.replace('a', 'o');
        } else if (eachLetter === 'A') {
            return eachLetter.replace('A', 'O');
        } else if (eachLetter === 'e') {
            return eachLetter.replace('e', 'a');
        } else if (eachLetter === 'E') {
            return eachLetter.replace('E', 'A');
        } else if (eachLetter === 'i') {
            return eachLetter.replace('i', 'u');
        } else if (eachLetter === 'I') {
            return eachLetter.replace('I', 'U');
        } else if (eachLetter === 'o') {
            return eachLetter.replace('o', 'i');
        } else if (eachLetter === 'O') {
            return eachLetter.replace('O', 'I');
        } else if (eachLetter === 'u') {
            return eachLetter.replace('u', 'e');
        } else if (eachLetter === 'U') {
            return eachLetter.replace('U', 'E');
        } else return eachLetter;
    });
    var newValue = arr.join('');
    this.setState({
      value: newValue
    })
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App;
