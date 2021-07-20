import './Board.css';

function Board () {

  let contructBoard = (boardSize) => {
    let board = []
    for (let row = 0; row < boardSize; row++) {
      let temp = []
      for (let column = 0; column < boardSize; column++) {
        let style = null;
        let key = row.toString() + column.toString()
        //Top left corner
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
        temp.push(<td key={key} className={style}></td>);
      }
      board.push(<tr key={"row" + row.toString()}>{temp}</tr>)
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