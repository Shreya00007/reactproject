import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Profiles from './Profiles';
import State from './State';
import Eventhandling from './Eventhandling';
import Lifecycle from './Lifecycle';

// import Hideshow from './Hideshow';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <h1>JSX With React</h1> */}
      { /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/*<h1>Props in React</h1>*/}
        <Profiles text={{name:'peter'}} data="Profile Data"/>
        <Profile text={{name:'peter'}} data="Profile Data"/>

        <Home />
        <Home/>
        <State/>
        <Eventhandling />
        <Lifecycle/>
      </header>
      {
        React.createElement(
          'h1',
          {className:'head-tag'},
          'Hello JSX'

        )
      }
    </div>
  );
}

export default App;
