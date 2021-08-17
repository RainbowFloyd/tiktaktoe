import './BoardCell.css'

const BoardCell = (props) => {
  const row = props.row;
  const column = props.column;
  const boardSize = props.boardSize;
  let style = null;
  if (row === 0 && column === 0) {
    style = "topLeft"
    //Top right corner
  } else if (row === 0 && column === boardSize - 1) {
    style = "topRight"
    //Bottom left corner
  } else if (row === boardSize - 1 && column === 0) {
    style = "bottomLeft"
    //Bottom right corner
  } else if (row === boardSize - 1 && column === boardSize - 1) {
    style = "bottomRight"
    //Top row
  } else if (row === 0 && (column > 0 && column < boardSize - 1)) {
    style = "topRow"
    //First column
  } else if (column === 0 && (row > 0 && row < boardSize - 1)) {
    style = "firstColumn"
    //Bottom Row
  } else if (row === boardSize - 1 && (column > 0 && column < boardSize - 1)) {
    style = "bottomRow"
    //Last column
  } else if (column === boardSize - 1 && (row > 0 && row < boardSize - 1)) {
    style = "lastColumn"
  } else {
    style = "middle"
  }

  return (
    <td onClick={() => props.handleCellClick(row, column)} className={style}></td>
  )

}

export default BoardCell;