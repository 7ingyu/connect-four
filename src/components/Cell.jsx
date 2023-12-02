export default function Cell (
  { row, col, handleClick, filled, frozen }
) {

  return (
    <div className="gamecell">
      <button
        disabled={frozen}
        onClick={handleClick}
        className={filled === 1 ? 'red' : filled === 2 ? 'yellow' : ''}
      ></button>
    </div>
  )
}