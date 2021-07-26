import React, { Component } from 'react';
import MainMenu from '../components/MainMenu';
import './Board.css';
import BoardRow from '../components/BoardRow/BoardRow'
//import Letter from './Letter';

class Board extends Component {

  state = {
    layout: {},
    startGame: false,
  }


  handleStartGameClick = () => {
    //this.initLayoutState(3);
    this.board = this.contructBoard(3);
    this.setState({startGame: true});
  }

  contructBoard = (boardSize) => {
    let boardRows = [];
    for (let row = 0; row < boardSize; row++) {
      boardRows.push(<BoardRow
        key={`${row}`}
        boardSize={boardSize}
        row={row} />)
    }
    return <table className="board"><tbody>{boardRows}</tbody></table>;
  }


  board = null

  render() {
    return (
      <div className="boardContainer">
        {this.state.startGame ? this.board : <MainMenu test={this.handleStartGameClick}/>}
      </div>
    );
  }
}

export default Board;

    //   let board = []
    //   for (let row = 0; row < boardSize; row++) {
    //     let temp = []
    //     for (let column = 0; column < boardSize; column++) {
    //       let style = null;
    //       let squareId = row.toString() + column.toString()
    //       //Top left corner
    //       if (row === 0 && column === 0) {
    //         style = "topLeft"
    //         //Top right corner
    //       } else if (row === 0 && column === boardSize - 1) {
    //         style = "topRight"
    //         //Bottom left corner
    //       } else if (row === boardSize - 1 && column === 0) {
    //         style = "bottomLeft"
    //         //Bottom right corner
    //       } else if (row === boardSize - 1 && column === boardSize - 1) {
    //         style = "bottomRight"
    //         //Top row
    //       } else if (row === 0 && (column > 0 && column < boardSize - 1)) {
    //         style = "topRow"
    //         //First column
    //       } else if (column === 0 && (row > 0 && row < boardSize - 1)) {
    //         style = "firstColumn"
    //         //Bottom Row
    //       } else if (row === boardSize - 1 && (column > 0 && column < boardSize - 1)) {
    //         style = "bottomRow"
    //         //Last column
    //       } else if (column === boardSize - 1 && (row > 0 && row < boardSize - 1)) {
    //         style = "lastColumn"
    //       } else {
    //         style = "middle"
    //       }
    //       temp.push(<td
    //         key={squareId}
    //         className={style}
    //         //onClick={() => this.handleSquareClick(squareId)}
    //         >
    //           <Letter
    //           onClick={this.handleSquareClick}
    //             handleClick={this.handleSquareClick}
    //             squardNum={squareId}
    //             wasClicked={this.state.layout[squareId]}
    //           />
    //         </td>);
    //       // console.log(this.state)
    //     }
    //     board.push(<tr key={"row" + row.toString()}>{temp}</tr>)
    //   }
    //   return <table className="board"><tbody>{board}</tbody></table>
    // }

    // handleSquareClick = (squareId) => {
    //   let stateLayoutCopy = {...this.state.layout}
    //   stateLayoutCopy[squareId] = true
    //   this.setState({layout: stateLayoutCopy}, () => console.log(this.state.layout))
    //   this.board = this.contructBoard(3);
    // }

    //     testIt = () => {
    //   this.setState({testme: true}, () => {
    //     console.log('do it')
    //   })
    // }

    // initLayoutState = (boardSize) => {
    //   let boardStateLayout = {}
    //   for (let row = 0; row < boardSize; row++) {
    //     for (let column = 0; column < boardSize; column++) {
    //       let squareId = row.toString() + column.toString()
    //       boardStateLayout[squareId] = false;
    //     }
    //   }
    //   this.setState({ layout: boardStateLayout }, () => {
    //     //console.log(this.state.layout)
    //   })
    // }
