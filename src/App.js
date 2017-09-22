import React, { Component } from 'react';
import Board from './components/Board';
import Navbar from './components/Navbar';
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshBoard: false
    }
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame(e) {
    e.preventDefault();
    this.setState({ refreshBoard: true })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.refreshBoard) {
      this.setState({ refreshBoard: true });
    }
  }

  render() {
    return (
      <div className="page-wrapper">
        <Navbar resetGame={ this.resetGame }/>
        <Board shouldRefresh={ this.state.refreshBoard } /> 
      </div>
    );
  }
}

export default App;
