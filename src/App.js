import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Cources from './Components/Cources/Cources';
import fakeData from './fakeData/fakeData'


function App() {
  return (
    <div className="App">
      <Header></Header>
      {
        fakeData.map((course) =><Cources course={course}></Cources>)
      }
    </div>
  );
}

export default App;
