import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: [
            { firstName: 'Gustavo', lastName: 'Fring', smoothieFlavor: 'lemonade' },
            { firstName: 'Tony', lastName: 'Hawk', smoothieFlavor: 'Mango' }
          ]
      }
  }

  nameObj={
    firstName: '',
    lastName: '',
    smoothieFlavor: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.nameObj);
    this.setState({name: [...this.state.name, this.nameObj]});
  };

  handleClick = (event) => {
    var newArr = this.state.name.filter(eachObj => eachObj.firstName !== event.target.value);
    this.setState({
      name: newArr
    })
  };

  render() {
      return (
        <div className='App'> 
         <div className='main-heading'>
           <h1>Student Manager Demo</h1>
          </div>
          <div className='heading'>
            <div>First Name</div>
            <div>Last Name </div>
            <div>Smoothie Flavor</div>
          </div>
          <div className='heading-values-div'>
            {
              this.state.name.map((obj, i) => 
              <div key={i} className='heading-values'>
                <div>{obj.firstName}</div>
                <div>{obj.lastName}</div>
                <div>{obj.smoothieFlavor}</div>
                <button value={obj.firstName} onClick={this.handleClick}>Delete</button>
              </div>)
            }
          </div>
          <div className='form'>
            <form onSubmit={this.handleSubmit}>
              <input type="text" onChange={event => this.nameObj.firstName = event.target.value} />
              <input type='text' onChange={event => this.nameObj.lastName = event.target.value} />
              <input type='text' onChange={event => this.nameObj.smoothieFlavor = event.target.value} />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
  }
}

export default App;