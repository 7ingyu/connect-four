import { useState, useEffect } from 'react';
import getWinner from '../utils/detectWin';
import Cell from './Cell'

export default function Board (
  { board, setBoard, frozen, setFrozen, score, setScore }
) {

  const [ lastStart, setLastStart ] = useState(1)
  const [ turn, setTurn ] = useState(1)
  const [ msg, setMsg ] = useState('')

  useEffect(() => {
    setMsg(`Player ${turn}'s turn.`)
  }, [turn])

  useEffect(() => {
    if (frozen) return
    const newStarter = lastStart === 1 ? 2 : 1
    setLastStart(newStarter)
    setTurn(newStarter)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frozen])

  useEffect(() => {
    // checkBoard for win
    const winner = getWinner(board)
    if (winner) {
      const loser = winner === 1 ? 2 : 1
      let newScore = {...score}
      score[winner].wins += 1
      score[loser].losses += 1
      setMsg(`Player ${winner} wins!`)
      setScore({...newScore})
      setFrozen(true)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])

  const handleClick = (col) => {
    // Calculate piece placement
    console.log(col);
    let newBoard = [...board];
    for (let row = 5; row >= 0; row--) {
      if (!board[row][col]) {
        let newRow = [...newBoard[row]];
        newRow[col] = turn;
        newBoard[row] = [...newRow];
        break;
      }
    }
    setBoard([...newBoard]);
    setTurn(turn === 1 ? 2 : 1);
  }

  return (
    <>
      <div className={`msg${frozen && turn ? turn === 2 ? ' red' : turn === 1 ? ' yellow' : '' : ''}`}>{msg}</div>
      <div className="gameboard">
        {board.map((row, r) => (
          <div className={`row ${turn === 1 ? 'red' : turn === 2 ? 'yellow' : ''}`} key={`row-${r}`}>
            {row.map((cell, c) =>
              <Cell
                key={`cell-${r}-${c}`}
                row={r}
                col={c}
                handleClick={() => handleClick(c)}
                filled={cell}
                frozen={frozen}
              />
            )}
          </div>
        ))}
      </div>
    </>
  )
}