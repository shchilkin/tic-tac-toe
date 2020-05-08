import React from 'react';
import './App.css';
import Game from "./Components/Game";
import GameState from './context/GameState.jsx';
import Page from "./Components/Page";


function App() {
  return (
      <GameState>
          <Page>
              <Game />
          </Page>
      </GameState>
  );
}

export default App;
