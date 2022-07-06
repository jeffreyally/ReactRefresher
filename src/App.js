import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Blah} from './Blah.js'


const StarWars = () => {

  return(

    <h1> I am making a StarWars
    </h1>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Blah name ='Blah1'/> */}
        <StarWars/>
        
        
      </header>
    </div>
  );
}

export default App;
