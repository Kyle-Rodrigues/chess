import './App.css';
import { useState } from 'react';
import black_king from './assets/black_king.png'
import black_queen from './assets/black_queen.png'
import black_rook from './assets/black_rook.png'
import black_bishop from './assets/black_bishop.png'
import black_knight from './assets/black_knight.png'
import black_pawn from './assets/black_pawn.png'
import white_king from './assets/white_king.png'
import white_queen from './assets/white_queen.png'
import white_rook from './assets/white_rook.png'
import white_bishop from './assets/white_bishop.png'
import white_knight from './assets/white_knight.png'
import white_pawn from './assets/white_pawn.png'
function App() {
  const [pieceClicked, setPieceClicked] = useState()
  const [board, setBoard] = useState([
    //First Row
    [
      {
        name: 'a_8',
        color: 'light',
        piece: 'black_rook',
        canMove: false,
      },
      {
        name: 'b_8',
        color: 'dark',
        piece: 'black_knight',
        canMove: false,
      },
      {
        name: 'c_8',
        color: 'light',
        piece: 'black_bishop',
        canMove: false,
      },
      {
        name: 'd_8',
        color: 'dark',
        piece: 'black_queen',
        canMove: false,
      },
      {
        name: 'e_8',
        color: 'light',
        piece: 'black_king',
        canMove: false,
      },
      {
        name: 'f_8',
        color: 'dark',
        piece: 'black_bishop',
        canMove: false,
      },
      {
        name: 'g_8',
        color: 'light',
        piece: 'black_knight',
        canMove: false,
      },
      {
        name: 'h_8',
        color: 'dark',
        piece: 'black_rook',
        canMove: false,
      },
    ],
    //Second Row
    [
      {
        name: 'a_7',
        color: 'dark',
        piece: 'black_pawn',
        canMove: false,
      },
      {
        name: 'b_7',
        color: 'light',
        piece: 'black_pawn',
        canMove: false,
      },
      {
        name: 'c_7',
        color: 'dark',
        piece: 'black_pawn',
        canMove: false,
      },
      {
        name: 'd_7',
        color: 'light',
        piece: 'black_pawn',
        canMove: false,
      },
      {
        name: 'e_7',
        color: 'dark',
        piece: 'black_pawn',
        canMove: false,
      },
      {
        name: 'f_7',
        color: 'light',
        piece: 'black_pawn',
        canMove: false,
      },
      {
        name: 'g_7',
        color: 'dark',
        piece: 'black_pawn',
        canMove: false,
      },
      {
        name: 'h_7',
        color: 'light',
        piece: 'black_pawn',
        canMove: false,
      },
    ],
    //Third Row
    [
      {
        name: 'a_6',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'b_6',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'c_6',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'd_6',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'e_6',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'f_6',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'g_6',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'h_6',
        color: 'dark',
        piece: '',
        canMove: false,
      },
    ],
    //Fourth Row
    [
      {
        name: 'a_5',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'b_5',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'c_5',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'd_5',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'e_5',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'f_5',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'g_5',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'h_5',
        color: 'light',
        piece: '',
        canMove: false,
      },
    ],
    //Fifth Row
    [
      {
        name: 'a_4',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'b_4',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'c_4',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'd_4',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'e_4',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'f_4',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'g_4',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'h_4',
        color: 'dark',
        piece: '',
        canMove: false,
      },
    ],
    //Sixth Row
    [
      {
        name: 'a_3',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'b_3',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'c_3',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'd_3',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'e_3',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'f_3',
        color: 'light',
        piece: '',
        canMove: false,
      },
      {
        name: 'g_3',
        color: 'dark',
        piece: '',
        canMove: false,
      },
      {
        name: 'h_3',
        color: 'light',
        piece: '',
        canMove: false,
      },
    ],
    //Seventh Row,
    [
      {
        name: 'a_2',
        color: 'light',
        piece: 'white_pawn',
        canMove: false,
      },
      {
        name: 'b_2',
        color: 'dark',
        piece: 'white_pawn',
        canMove: false,
      },
      {
        name: 'c_2',
        color: 'light',
        piece: 'white_pawn',
        canMove: false,
      },
      {
        name: 'd_2',
        color: 'dark',
        piece: 'white_pawn',
        canMove: false,
      },
      {
        name: 'e_2',
        color: 'light',
        piece: 'white_pawn',
        canMove: false,
      },
      {
        name: 'f_2',
        color: 'dark',
        piece: 'white_pawn',
        canMove: false,
      },
      {
        name: 'g_2',
        color: 'light',
        piece: 'white_pawn',
        canMove: false,
      },
      {
        name: 'h_2',
        color: 'dark',
        piece: 'white_pawn',
        canMove: false,
      },
    ],
    //Eigth Row,
    [
      {
        name: 'a_1',
        color: 'dark',
        piece: 'white_rook',
        canMove: false,
      },
      {
        name: 'b_1',
        color: 'light',
        piece: 'white_knight',
        canMove: false,
      },
      {
        name: 'c_1',
        color: 'dark',
        piece: 'white_bishop',
        canMove: false,
      },
      {
        name: 'd_1',
        color: 'light',
        piece: 'white_queen',
        canMove: false,
      },
      {
        name: 'e_1',
        color: 'dark',
        piece: 'white_king',
        canMove: false,
      },
      {
        name: 'f_1',
        color: 'light',
        piece: 'white_bishop',
        canMove: false,
      },
      {
        name: 'g_1',
        color: 'dark',
        piece: 'white_knight',
        canMove: false,
      },
      {
        name: 'h_1',
        color: 'light',
        piece: 'white_rook',
        canMove: false,
      },
    ],
  ])
  const letterToNumber = (letter) => {
    switch (letter) {
      case 'a':
        return 1
      case 'b':
        return 2
      case 'c':
        return 3
      case 'd':
        return 4
      case 'e':
        return 5
      case 'f':
        return 6
      case 'g':
        return 7
      case 'h':
        return 8
    }
  }
  const numberToLetter = (number) => {
    switch (number) {
      case 1:
        return 'a'
      case 2:
        return 'b'
      case 3:
        return 'c'
      case 4:
        return 'd'
      case 5:
        return 'e'
      case 6:
        return 'f'
      case 7:
        return 'g'
      case 8:
        return 'h'
    }
  }
  const checkLegalMoves = (piece) => {
    //Refresh available moves
    const updatedBoard = board.map(row =>
      row.map(square => ({ ...square, canMove: false }))
    );
    //Get Piece that was chosen 
    var selectedPieceColor = piece.piece.split('_')[0]
    var selectedPiece = piece.piece.split('_')[1]
    //Get Square that was chosen
    let selectedSquare = String(piece.name).split('_')
    let selectedLetter = selectedSquare[0]
    let selectedNumber = parseInt(selectedSquare[1])
    //Get possible moves based on selected piece
    var possibleMoves = []
    switch (selectedPiece) {
      case 'king':
        //Put all the possible king moves into a array
        let kingMoves = []
        let up1 = String(selectedLetter + '_' + (selectedNumber + 1))
        let right1 = String(numberToLetter(letterToNumber(selectedLetter) + 1) + '_' + (selectedNumber))
        let down1 = String(selectedLetter + '_' + (selectedNumber - 1))
        let left1 = String(numberToLetter(letterToNumber(selectedLetter) - 1) + '_' + (selectedNumber))
        let upRight1 = String(numberToLetter(letterToNumber(selectedLetter) + 1) + '_' + (selectedNumber + 1))
        let upLeft1 = String(numberToLetter(letterToNumber(selectedLetter) - 1) + '_' + (selectedNumber + 1))
        let downLeft1 = String(numberToLetter(letterToNumber(selectedLetter) - 1) + '_' + (selectedNumber - 1))
        let downRight1 = String(numberToLetter(letterToNumber(selectedLetter) + 1) + '_' + (selectedNumber - 1))
        kingMoves.push(up1, down1, right1, left1, upLeft1, upRight1, downLeft1, downRight1)
        //Loop through each King move and enable them if they are legal
        kingMoves.forEach(move => {
          board.forEach(row => row.forEach((square => {
            //Only allow move if space is empty
            if (square.name == move && square.piece == '') {
              possibleMoves.push(move)
            }
            //Allow moves that take enemy pieces
            else if (square.name == move && square.piece.split('_')[0] != selectedPieceColor) {
              possibleMoves.push(move)
            }
          })))
        })
        break;
      case 'queen':
        var queenMoves = []
        //Up moves
        //Check all the up moves in a for loop
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            var move = String(selectedLetter + '_' + (selectedNumber + i));
            var moveRow = board.find(row => row.find(square => square.name === move))
            const moveSquare = board.find(row => row.find(square => square.name === move))
            queenMoves.push(move)
          }
        }
        //Down moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            queenMoves.push(String(selectedLetter + '_' + (selectedNumber - i)))
          }
        }
        //Left moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            queenMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - i) + '_' + (selectedNumber)))
          }
        }
        //Right moves
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            queenMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + i) + '_' + (selectedNumber)))
          }
        }
        //Up right moves
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            queenMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + i) + '_' + (selectedNumber + i)))
          }
        }
        //Up left moves
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            queenMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - i) + '_' + (selectedNumber + i)))
          }
        }
        //Down left moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            queenMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - i) + '_' + (selectedNumber - i)))
          }
        }
        //Down right moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            queenMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + i) + '_' + (selectedNumber - i)))
          }
        }
        //Loop through the queen moves and remove the illegal ones
        var stopSquares = []
        queenMoves.forEach(move => {
          board.forEach(row => row.forEach((square => {
            if (square.name == move && square.piece == '') {
              possibleMoves.push(move)
            }
            //Allow moves that take enemy pieces
            else if (square.name == move && square.piece.split('_')[0] != selectedPieceColor) {
              possibleMoves.push(move)
            }
          })))
        })
        break;
      case 'rook':
        //Up moves
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(selectedLetter + '_' + (selectedNumber + i)))
          }
        }
        //Down moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(selectedLetter + '_' + (selectedNumber - i)))
          }
        }
        //Left moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - i) + '_' + (selectedNumber)))
          }
        }
        //Right moves
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + i) + '_' + (selectedNumber)))
          }
        }
        break;
      case 'bishop':
        //Up right moves
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + i) + '_' + (selectedNumber + i)))
          }
        }
        //Up left moves
        for (let i = 0; i < 8; i++) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - i) + '_' + (selectedNumber + i)))
          }
        }
        //Down left moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - i) + '_' + (selectedNumber - i)))
          }
        }
        //Down right moves
        for (let i = 8; i > 0; i--) {
          if (String(selectedLetter + '_' + (selectedNumber + i)) != piece.name) {
            possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + i) + '_' + (selectedNumber - i)))
          }
        }
        break;
      case 'pawn':
        if (selectedPieceColor == 'white') {
          possibleMoves.push(String(selectedLetter + '_' + (selectedNumber + 1)))
          if (selectedNumber == 2) possibleMoves.push(String(selectedLetter + '_' + (selectedNumber + 2)))
          let upRightTake = String(numberToLetter(letterToNumber(selectedLetter) + 1) + '_' + (selectedNumber + 1))
          let upLeftTake = String(numberToLetter(letterToNumber(selectedLetter) - 1) + '_' + (selectedNumber + 1))
          board.forEach((row) => row.forEach((square) => {
            if (square.name == upRightTake && square.piece != '') possibleMoves.push(upRightTake)
            if (square.name == upLeftTake && square.piece != '') possibleMoves.push(upLeftTake)
          }))
        }
        else if (selectedPieceColor == 'black') {
          possibleMoves.push(String(selectedLetter + '_' + (selectedNumber - 1)))
          if (selectedNumber == 7) possibleMoves.push(String(selectedLetter + '_' + (selectedNumber - 2)))
          let downRightTake = String(numberToLetter(letterToNumber(selectedLetter) + 1) + '_' + (selectedNumber - 1))
          let downLeftTake = String(numberToLetter(letterToNumber(selectedLetter) - 1) + '_' + (selectedNumber - 1))
          board.forEach((row) => row.forEach((square) => {
            if (square.name == downRightTake && square.piece != '') possibleMoves.push(downRightTake)
            if (square.name == downLeftTake && square.piece != '') possibleMoves.push(downLeftTake)
          }))
        }
        break;
      case 'knight':
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - 1) + '_' + (selectedNumber + 2)))
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + 1) + '_' + (selectedNumber + 2)))
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - 1) + '_' + (selectedNumber - 2)))
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + 1) + '_' + (selectedNumber - 2)))
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - 2) + '_' + (selectedNumber + 1)))
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + 2) + '_' + (selectedNumber + 1)))
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) - 2) + '_' + (selectedNumber - 1)))
        possibleMoves.push(String(numberToLetter(letterToNumber(selectedLetter) + 2) + '_' + (selectedNumber - 1)))
        break;
    }
    //Update possible moves to remove illegal moves

    // Update board to show legal moves
    const finalBoard = updatedBoard.map(row =>
      row.map(square => {
        if (possibleMoves.includes(square.name)) {
          return { ...square, canMove: true };
        }
        return square;
      })
    );
    setPieceClicked(piece)
    setBoard(finalBoard);
  }
  const movePiece = (destinationSquare) => {
    if (destinationSquare.canMove == true) {
      //Get Selected Piece from state
      var selectedPiece = pieceClicked.piece
      //Update board with piece move
      const updatedBoard = board.map(row =>
        row.map(square => {
          if (square.name == pieceClicked.name) {
            return { ...square, piece: '' }
          }
          if (square.name == destinationSquare.name) {
            return { ...square, piece: selectedPiece, canMove: false };
          }
          return { ...square, canMove: false };
        })
      );
      setBoard(updatedBoard);
    }
    else return
  }

  const Square = (props) => {
    //Switch square color
    var color = 'brown';
    if (props.color === 'light') {
      color = 'lightBlue'
    }
    else if (props.color === 'dark') {
      color = 'darkBlue'
    }
    //Get Image based on piece that is on square
    let image = ''
    switch (props.piece) {
      case 'white_king':
        image = white_king
        break;
      case 'white_queen':
        image = white_queen
        break;
      case 'white_rook':
        image = white_rook
        break;
      case 'white_bishop':
        image = white_bishop
        break;
      case 'white_knight':
        image = white_knight
        break;
      case 'white_pawn':
        image = white_pawn
        break;
      case 'black_queen':
        image = black_queen
        break;
      case 'black_king':
        image = black_king
        break;
      case 'black_rook':
        image = black_rook
        break;
      case 'black_bishop':
        image = black_bishop
        break;
      case 'black_knight':
        image = black_knight
        break;
      case 'black_pawn':
        image = black_pawn
        break;
    }
    return (
      <div className='square' style={{ backgroundColor: color, opacity: props.canMove ? 0.4 : 1 }} onClick={() => { movePiece(props) }}>
        {props.piece != '' ? <img className='piece' src={image} alt={props.name} onClick={() => { checkLegalMoves(props) }} /> : <></>}
      </div>
    )
  }
  return (
    <div className="App">
      {board.map((row, index) => {
        return (<div className='row'>
          {row.map((col, index) => {
            return (<Square name={col.name} color={col.color} piece={col.piece} canMove={col.canMove}></Square>)
          })}
        </div>)
      })}
    </div>
  );
}

export default App;
