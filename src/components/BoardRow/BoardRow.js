import BoardCell from './BoardCell/BoardCell'
import './BoardRow.css'

const BoardRow = (props) => {

  const boardSize = props.boardSize
  let boardCells = []
  let row = props.row

  for (let column = 0; column < boardSize; column++) {
    boardCells.push(<BoardCell
      key={`${row}${column}`}
      boardSize={boardSize}
      row={row}
      column={column}
      handleCellClick={props.handleCellClick} />)
  }

  return (
    <tr>{boardCells}</tr>
  )

}

export default BoardRow;