import BoardCell from './BoardCell/BoardCell'

const BoardRow = (props) => {

  const boardSize = props.boardSize
  let row = []

  for (let column = 0; column < boardSize; column++) {
    row.push(<tr key={`${row}${column}`}><BoardCell
      boardSize={boardSize}
      row={props.row}
      column={column} /></tr>)
  }

  return (
    row
  )

}

export default BoardRow;