import React, { Component } from 'react';
import Checkout from './Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Checkout 
              name={'The Road to Learn React'}
              description={'Only the Book'}
              amount={1000}
            />
      </div>
    );
  }
}

export default App;
