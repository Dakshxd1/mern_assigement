import React from 'react';
import './App.css';
import Header from './components/Header';
import CounterBox from './components/CounterBox';
import Timer from './components/Timer';
import Themebox from './components/Themebox';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <CounterBox />
        <Timer />
        <Themebox />
      </div>
    </div>
  );
}

export default App;