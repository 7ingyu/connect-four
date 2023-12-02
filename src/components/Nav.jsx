export default function Nav ({ reset }) {

  return (
    <div className="navbar">
      <div className="">
        <h1>Connect Four</h1>
      </div>
      <div className="">
        <button onClick={reset}>Reset Game</button>
      </div>
    </div>
  )
}