import Cell from './Cell'

export default function Board ({ board, setBoard }) {

  return (
    <div className="gameboard">
      {board.map((row, r) => (
        <div className="row">
          {row.map((cell, c) =>
            <Cell row={r} col={c} setBoard={setBoard}/>
          )}
        </div>
      ))}
    </div>
  )
}