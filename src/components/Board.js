import './Board.css';

function Board () {

  let contructBoard = (boardSize) => {
    let board = []
    for (let row = 0; row < boardSize; row++) {
      let temp = []
      for (let column = 0; column < boardSize; column++) {
        //Top left corner
        if (row === 0 && column === 0) {
          temp.push(<td className="topLeft"></td>);
          //Top right corner
        } else if (row === 0 && column === boardSize - 1) {
          temp.push(<td className="topRight"></td>);
          //Bottom left corner
        } else if (row === boardSize - 1 && column === 0) {
          temp.push(<td className="bottomLeft"></td>)
          //Bottom right corner
        } else if (row === boardSize - 1 && column === boardSize - 1) {
          temp.push(<td className="bottomRight"></td>)
          //Top row
        } else if (row === 0 && (column > 0 && column < boardSize - 1)) {
          temp.push(<td className="topRow"></td>)
          //First column
        } else if (column === 0 && (row > 0 && row < boardSize - 1)) {
          temp.push(<td className="firstColumn"></td>)
          //Bottom Row
        } else if (row === boardSize - 1 && (column > 0 && column < boardSize - 1)) {
          temp.push(<td className="bottomRow"></td>)
          //Last column
        } else if (column === boardSize - 1 && (row > 0 && row < boardSize - 1)) {
          temp.push(<td className="lastColumn"></td>)
        } else {
          temp.push(<td className="middle"></td>)
        }
      }
      board.push(<tr>{temp}</tr>)
    }
    return <table className="board"><tbody>{board}</tbody></table>
  }

  const board = contructBoard(3);

  return (
    <div className="boardContainer">
        {board}
    </div>
  );
}

export default Board;