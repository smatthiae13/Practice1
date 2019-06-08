import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/Useroutput';

import './App.css';

class App extends Component {
  state = {
    UserInput: [
      { name: "Sam"},
      { userName: "Rocketsam13"}
    ]
  }

    render() {
  return (

    <div>

      <UserInput />
      <UserOutput />

    </div>
  );
}
};

export default App;
