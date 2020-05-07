import React from 'react';
import './App.css';
import Game from "./Components/Game";

function App() {
  return (
    <div style={{
        backgroundColor:'#F5884B',
        height: '100vh',
        display:'flex',
        justifyContent: "center",
        alignItems:'center',
    }} className="App">
      <Game />
    </div>
  );
}

export default App;
