import React, { Component } from 'react';
import Snake from './Snake/Snake';

import { database } from './firebaseConfig'

class App extends Component {
  render() {
    return (
     <Snake
      firebaseDataase={database}
     />
    );
  }
}

export default App;
