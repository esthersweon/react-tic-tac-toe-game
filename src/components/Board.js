import React, { Component } from 'react';
import '../styles/Board.css';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        '','','','','','','','',''
      ],
      winner: false
    }
  }

  componentWillReceiveProps() {
    if (this.props.shouldRefresh) {
      this.setState({
        currentTurn: "X",
        board: [
          '','','','','','','','',''
        ],
        winner: false,
        shouldRefresh: false
      })
    }
  }

  // if (there's a winner) stop the game
  // else keep playing
  handleClick(index) {
    if (this.state.winner) {
      alert('Press Refresh')
    } else {
      if(this.state.board[index] === '') {
        let clonedBoard = this.state.board.slice(0)
        clonedBoard[index] = this.state.currentTurn
        this.setState({
          board: clonedBoard,
          currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL
          ? this.state.PLAYER_TWO_SYMBOL
          : this.state.PLAYER_ONE_SYMBOL,
        }, this.checkForWinner)
      }
    }
  }

  // if the board state matches a wins combo return the winner
  checkForWinner() {
    let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
    let state = this.state.board

    wins.forEach((combo) => {
      if(state[combo[0]] === state[combo[1]]
        && state[combo[0]] === state[combo[2]]
        && state[combo[0]]) {
        alert('Winner is ' + state[combo[0]])
        this.setState({ winner: true })
      }
    })
  }

  render() {
    return (
      <div className="board">
        {this.state.board.map((cell, index) => {
          return <div
            key={ index }
            onClick={this.handleClick.bind(this, index)}
            data-cell-id={index}
            className="square">{cell}
          </div>;
          }
        )}
      </div>
    );
  }
}

export default Board;
