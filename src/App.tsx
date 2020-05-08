import React from 'react';
import './App.css';
import Game from "./Components/Game";
import GameState from './context/GameState.jsx';


function App() {
  return (
      <GameState>
        <div style={{
          backgroundColor:'#C6D3D0',
          height: '100vh',
          display:'flex',
          justifyContent: "center",
          alignItems:'center',
        }} className="App">
          <Game />
        </div>
      </GameState>
  );
}

export default App;
