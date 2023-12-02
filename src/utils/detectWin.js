export default function detectWin (board) {
  // horizontals
  console.log('checking horizontals')
  for (let r = 0; r < board.length; r++) {
      let count = 0
      let player = 0

      for (let c = 0; c < board[0].length; c++) {
        let cell = board[r][c]
        if (!!cell && cell !== player) {
          player = cell
          count = 1
        } else if (!!cell && cell === player) {
          count ++
        }
        if (count >= 4 && !!player) {
          return player
        }
      }
    }

  // verticals
  console.log('checking verticals')
    for (let c = 0; c < board[0].length; c++) {
      let count = 0
      let player = 0
      for (let r = 0; r < board.length; r++) {
        let cell = board[r][c]
        if (!!cell && cell !== player) {
          player = cell
          count = 1
        } else if (!!cell && cell === player) {
          count ++
        }
        if (count >= 4 && !!player) {
          return player
        }
      }
    }

  // diagonals
  console.log('checking diagonals')
  let startRow = 0
  while (startRow < 4) {
    let count = 0
    let player = 0
    let r = startRow
    let c = 0
    while (r < board.length && c < board[0].length) {
      let cell = board[r][c]
      if (!!cell && cell !== player) {
        player = cell
        count = 1
      } else if (!!cell && cell === player) {
        count ++
      }
      if (count >= 4 && !!player) {
        return player
      }
      r++
      c++
    }
    startRow++
  }

  return 0
}