import axios from "axios";
import Square from "../components/Square";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Board() {
  const [players, setPlayers] = useState(null);
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  useEffect(() => {
    const playernames = localStorage.getItem("names").split("_");
    setPlayers(playernames);
  }, []);

  useEffect(() => {
    async function checkWin() {
      if (squares.every((square) => square !== null)) {
        alert("Draw");
        window.location.reload();
      }

      const gameWinner = calculateWinner(squares);
      if (gameWinner) {
        console.log("winner", gameWinner);
        try {
          const gameResultsData = [
            {
              name: gameWinner === "X" ? players[0] : players[1],
              status: "WIN",
            },
            {
              name: gameWinner === "X" ? players[1] : players[0],
              status: "LOSE",
            },
          ];

          await axios.post(
            "http://127.0.0.1:8000/update_victory_count/",
            gameResultsData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        } catch (error) {}
        alert(`Winner : ${gameWinner}`);
      }
    }

    void checkWin();
  }, [squares]);

  const navigate = useNavigate();
  function returnHomePage() {
    localStorage.removeItem("names");
    navigate("/");
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center gap-2 bg-[#3B2A9F]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-white bg-black px-5 py-2 rounded-lg text-3xl font-bold flex justify-center gap-7 mb-3">
            <h1>{players && `X : ${players[0]}`}</h1>
            <h1>{players && `O : ${players[1]}`}</h1>
          </div>
          <div className="text-white text-3xl font-bold flex justify-center mb-3">
            Current Player : {xIsNext ? "X" : "O"}
          </div>
        </div>
        <div className="flex justify-center gap-2">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex justify-center gap-2">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex justify-center gap-2">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <button
          className="text-cyan-200 mt-2 text-2xl font-bold hover:drop-shadow-lg hover:scale-90 transition-all duration-200"
          onClick={returnHomePage}
        >
          NEW GAME
        </button>
      </div>
    </>
  );
}
