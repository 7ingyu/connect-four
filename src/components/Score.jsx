export default function Score () {

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
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  )
}