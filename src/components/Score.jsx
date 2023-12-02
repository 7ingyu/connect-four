export default function Score ({ score: { player1, player2 }}) {

  return (
    <table className="scoreboard">
      <thead>
        <tr>
          <th colSpan="2">Player 1</th>
          <th colSpan="2">Player 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Wins</td>
          <td>Losses</td>
          <td>Wins</td>
          <td>Losses</td>
        </tr>
        <tr>
          <td>{player1.wins}</td>
          <td>{player1.losses}</td>
          <td>{player2.wins}</td>
          <td>{player2.losses}</td>
        </tr>
      </tbody>
    </table>
  )
}