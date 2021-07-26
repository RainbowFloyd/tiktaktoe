import BoardCell from './BoardCell/BoardCell'
import './BoardRow.css'

const BoardRow = (props) => {

  const boardSize = props.boardSize
  let boardCells = []

  for (let column = 0; column < boardSize; column++) {
    boardCells.push(<BoardCell
      boardSize={boardSize}
      row={props.row}
      column={column} />)
  }

  return (
    <tr>{boardCells}</tr>
  )

}

export default BoardRow;