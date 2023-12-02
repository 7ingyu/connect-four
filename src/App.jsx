import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Score from './components/Score';
import Board from './components/Board';

function App() {

  const emptyBoard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ]

  const [ score, setScore ] = useState({
    player1: {
      wins: 0,
      losses: 0
    },
    player2: {
      wins: 0,
      losses: 0
    }
  })
  const [ board, setBoard ] = useState(emptyBoard)
  const [ frozen, setFrozen] = useState(false)

  const resetBoard = () => {
    setBoard(emptyBoard)
    setFrozen(false)
  }

  return (
    <div className="app">
      <header>
        <Nav reset={resetBoard} />
      </header>
      <main>
        <Score score={score}/>
        <Board
          board={board}
          setBoard={setBoard}
          frozen={frozen}
          setScore={setScore}
        />
      </main>
    </div>
  );
}

export default App;
