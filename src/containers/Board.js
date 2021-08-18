import React, { Component } from 'react';
import MainMenu from '../components/MainMenu';
import './Board.css';
import BoardRow from '../components/BoardRow/BoardRow'

class Board extends Component {

  state = {
    layout: {},
    startGame: true,
    currChar: 'x'
  }

  handleCellClick = (row, column) => {
    const cellIndex = `${row}${column}`
    let stateLayoutCopy = {...this.state.layout}
    if (!stateLayoutCopy[cellIndex] || stateLayoutCopy[cellIndex] === '') {
      stateLayoutCopy[cellIndex] = this.state.currChar
    }
    this.setState({layout: stateLayoutCopy}, () => {
      console.log(this.state.layout)
    });
    if (this.state.currChar === 'x') {
      this.setState({currChar: 'o'})
    } else {
      this.setState({currChar: 'x'})
    }
  }

  handleStartGameClick = () => {
    this.board = this.contructBoard(3);
    this.setState({startGame: true});
  }

  contructBoard = (boardSize) => {
    let boardRows = [];
    for (let row = 0; row < boardSize; row++) {
      boardRows.push(<BoardRow
        key={`${row}`}
        boardSize={boardSize}
        row={row}
        currChar={this.state.currChar}
        layout={this.state.layout}
        handleNewCell={this.handleNewCell}
        handleCellClick={this.handleCellClick}/>)
    }
    return <table className="board"><tbody>{boardRows}</tbody></table>;
  }

  board = this.contructBoard(3)

  render() {
    return (
      <div className="boardContainer">
        {this.state.startGame ? this.board : <MainMenu test={this.handleStartGameClick}/>}
      </div>
    );
  }
}

export default Board;

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
