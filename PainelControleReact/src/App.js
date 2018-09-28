import Menu from './components/Menu/Menu'
import TopBar from './components/TopBar/TopBar'
import React, { Component } from 'react';
import Main from './components/Main/Main'

class App extends Component {
  render() {
    return (
      <div>
       <TopBar />
       <Menu />
       <Main />
      </div>
    );
  }
}

export default App;