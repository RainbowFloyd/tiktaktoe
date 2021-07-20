import './Board.css';

function Board () {

  let contructBoard = (boardSize) => {
    let board = []
    for (let i = 0; i < boardSize; i++) {
      let temp = []
      for (let u = 0; u < boardSize; u++) {
        temp.push(<td></td>)
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