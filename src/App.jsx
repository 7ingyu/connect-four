import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Score from './components/Score';
import Board from './components/Board';

function App() {

  const [ board, setBoard ] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ])

  return (
    <div className="app">
      <header>
        <Nav />
      </header>
      <main>
        <Score />
        <Board board={board} setBoard={setBoard}/>
      </main>
    </div>
  );
}

export default App;
