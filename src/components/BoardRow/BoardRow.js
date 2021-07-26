import BoardCell from './BoardCell/BoardCell'

const BoardRow = (props) => {

  const boardSize = props.boardSize
  let row = []

  for (let column = 0; column < boardSize; column++) {
    row.push(<tr><BoardCell key={`${row}${column}`} boardSize={boardSize} /></tr>)
  }

  return (
    row
  )

}

export default BoardRow;