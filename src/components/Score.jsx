export default function Score ({ score }) {

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
          <td>{score[1].wins}</td>
          <td>{score[1].losses}</td>
          <td>{score[2].wins}</td>
          <td>{score[2].losses}</td>
        </tr>
      </tbody>
    </table>
  )
}