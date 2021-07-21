import React, { Component } from 'react';
import MainMenu from './MainMenu';
import './Board.css';
//import XorO from './XOro';

class Board extends Component {

    state = {
      layout: {},
      startGame: false
    }

    handleStartGameClick = () => {
      this.setState({startGame: true});
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



    // handleSquareClick = (squareId) => {
    //   console.log(squareId);
    //   let stateLayoutCopy = {...this.state.layout}
    //   stateLayoutCopy[squareId] = 'X'
    //   this.setState({layout: stateLayoutCopy}, () => console.log('state updated'))
    // }

    // contructBoard = (boardSize) => {
    //   let board = []
    //   let boardStateLayout = {}
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
    //       boardStateLayout[squareId] = undefined
    //       temp.push(<td
    //         key={squareId}
    //         className={style}
    //         onClick={() => this.handleSquareClick(squareId)}
    //         >
    //           <XorO
    //             test={squareId}
    //             el={this.state.layout[squareId]}
    //           />
    //         </td>);
    //     }
    //     board.push(<tr key={"row" + row.toString()}>{temp}</tr>)
    //   }
    //   this.setState = { layout: boardStateLayout }
    //   return <table className="board"><tbody>{board}</tbody></table>
    // }