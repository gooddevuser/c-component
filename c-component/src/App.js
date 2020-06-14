import React, { Component } from 'react';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

class App extends Component {
  render() {
    const style = {
      textAlign: 'center',
      color: 'red'
    };
    return (
      <>
        <br /><br />
        <h1 style={ style }>Hello, React !!!!!</h1>
        <FunctionComponent name="John Doe" 
                           email="johndoe@example.com"
                           age={31} />
        <FunctionComponent age={-1} />
        <ClassComponent name="Jane Doe" 
                        email="janedoe@example.com"
                        age={34} />
        <ClassComponent age={-1} />
      </>
    );
  }
}

export default App;
