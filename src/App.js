import React, { useState, useEffect } from 'react';
import './App.css';
import positionOfMines from './utils/utils';

function App() {
  const [dimension, setDimension] = useState(0);
  const [mine, setMines] = useState(0);
  const [board, setBoard] = useState([]);

  const white = {
    width: '30px',
    height: '30px',
    backgroundColor: 'white',
    border: '2px solid black',
    display: 'flex',
    margin: 'auto',
  };
  const boardBox = {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: `repeat(${dimension},30px)`,
    gridTemplateRows: `repeat(${dimension} ,30px)`,
    marginTop: '30x',
    width: '98%',
    margin: 'auto',
  };

  // const makeBoard = () => {
  //   const array2D = Array(Number(dimension))
  //     .fill()
  //     .map((_, indexH) =>
  //       Array(Number(dimension))
  //         .fill()
  //         .map((_, indexW) => indexW)
  //     );
  //   setMinesWeeper(array2D);
  //   console.log(minesweeper);
  // };
  // useEffect(() => {
  //   makeBoard();
  // }, [dimension]);

  const makeChessBoard = () => {
    let arr = [];

    console.log(arr);
    for (let i = 0; i < dimension; i++) {
      //0[0,0,0.1.0.2]
      //1[1.0,1.1,1.2]
      //2[2.0,2.1,2.2]
      let temp = [];
      for (let j = 0; j < dimension; j++) {
        // temp.push(<div key={count} style={white}></div>);
        temp.push({
          // element: <div key={`${i}-${j}`} style={white}></div>,
          x: i,
          y: j,
          isMine: false,
        });

        // temp.push(<div key={`${i}-${j}`} style={white}></div>);
      }
      arr.push(temp);
    }
    setBoard(arr);
  };
  const hila = () => {
    positionOfMines(board, dimension, mine);
  };

  useEffect(() => {
    makeChessBoard();
    positionOfMines(board, dimension, mine);
    console.log('hila', board);
  }, [dimension, mine]);

  return (
    <div className="App">
      <div className="board">
        <div>
          <h2>
            <span>N x N </span>
            minesweeper
          </h2>
          <input
            value={dimension}
            placeholder="Enter the Dimension"
            onChange={(e) => setDimension(e.target.value)}
          />
        </div>
        <div>
          <h2>
            <span>Mine Number </span>
          </h2>
          <input
            value={mine}
            placeholder="Enter number of mines"
            onChange={(e) => setMines(e.target.value)}
          />
        </div>
      </div>
      {/* <br></br> */}
      {/* <br></br> */}
      <div style={boardBox}>
        {board.map((row) => {
          return row.map((item) => {
            return (
              <div key={`${item.x}-${item.y}`} style={white}>
                {board[item.x][item.y].isMine ? '💥' : 'no'}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default App;
