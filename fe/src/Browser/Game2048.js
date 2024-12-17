import "./Game2048.scss"
import { Window } from "../Interface/Window";
import { useEffect } from "react";


export function Game2048({ 창닫기 }) {

  useEffect(() => {
    const $table = document.getElementById("table");
    const $score = document.getElementById("score");

    let data;

    function startGame() {
      data = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];
      $table.innerHTML = "";
      $score.textContent = "0";

      const $fragment = document.createDocumentFragment();
      data.forEach(() => {
        const $tr = document.createElement("tr");
        data[0].forEach(() => {
          const $td = document.createElement("td");
          $tr.appendChild($td);
        });
        $fragment.appendChild($tr);
      });
      $table.appendChild($fragment);
      put2ToRandomCell();
      draw();
    }

    function put2ToRandomCell() {
      const emptyCells = [];
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          if (!cellData) emptyCells.push([i, j]);
        });
      });
      const [i, j] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      data[i][j] = 2;
    }

    function draw() {
      data.forEach((rowData, i) => {
        rowData.forEach((cellData, j) => {
          const $target = $table.children[i].children[j];
          $target.textContent = cellData > 0 ? cellData : "";
          $target.className = cellData > 0 ? "color-" + cellData : "";
        });
      });
    }

    window.addEventListener("keyup", (e) => {
      const directions = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };
      if (directions[e.key]) moveCells(directions[e.key]);
    });

    function moveCells(direction) {
      let moved = false;
      switch (direction) {
        case "left":
          moved = moveLeft();
          break;
        case "right":
          moved = moveRight();
          break;
        case "up":
          moved = moveUp();
          break;
        case "down":
          moved = moveDown();
          break;
      }

      if (moved) {
        put2ToRandomCell();
        draw();
        checkGameStatus();
      }
    }

    function moveLeft() {
      let moved = false;
      data = data.map((row) => {
        const newRow = [];
        row.forEach((cell) => {
          if (cell) {
            if (newRow.length && newRow[newRow.length - 1] === cell) {
              newRow[newRow.length - 1] *= 2;
              updateScore(newRow[newRow.length - 1]);
            } else {
              newRow.push(cell);
            }
          }
        });
        while (newRow.length < 4) newRow.push(0);
        if (row.toString() !== newRow.toString()) moved = true;
        return newRow;
      });
      return moved;
    }

    function moveRight() {
      let moved = false;
      data = data.map((row) => {
        const newRow = [];
        row
          .slice()
          .reverse()
          .forEach((cell) => {
            if (cell) {
              if (newRow.length && newRow[newRow.length - 1] === cell) {
                newRow[newRow.length - 1] *= 2;
                updateScore(newRow[newRow.length - 1]);
              } else {
                newRow.push(cell);
              }
            }
          });
        while (newRow.length < 4) newRow.push(0);
        newRow.reverse();
        if (row.toString() !== newRow.toString()) moved = true;
        return newRow;
      });
      return moved;
    }

    function moveUp() {
      let moved = false;
      for (let j = 0; j < 4; j++) {
        const newColumn = [];
        for (let i = 0; i < 4; i++) {
          const cell = data[i][j];
          if (cell) {
            if (newColumn.length && newColumn[newColumn.length - 1] === cell) {
              newColumn[newColumn.length - 1] *= 2;
              updateScore(newColumn[newColumn.length - 1]);
            } else {
              newColumn.push(cell);
            }
          }
        }
        while (newColumn.length < 4) newColumn.push(0);
        for (let i = 0; i < 4; i++) {
          if (data[i][j] !== newColumn[i]) moved = true;
          data[i][j] = newColumn[i];
        }
      }
      return moved;
    }

    function moveDown() {
      let moved = false;
      for (let j = 0; j < 4; j++) {
        const newColumn = [];
        for (let i = 3; i >= 0; i--) {
          const cell = data[i][j];
          if (cell) {
            if (newColumn.length && newColumn[newColumn.length - 1] === cell) {
              newColumn[newColumn.length - 1] *= 2;
              updateScore(newColumn[newColumn.length - 1]);
            } else {
              newColumn.push(cell);
            }
          }
        }
        while (newColumn.length < 4) newColumn.push(0);
        newColumn.reverse();
        for (let i = 0; i < 4; i++) {
          if (data[i][j] !== newColumn[i]) moved = true;
          data[i][j] = newColumn[i];
        }
      }
      return moved;
    }

    function updateScore(value) {
      const score = parseInt($score.textContent);
      $score.textContent = score + value;
    }

    function checkGameStatus() {
      if (data.flat().includes(2048)) {
        setTimeout(() => alert("Congratulations! You made 2048!"), 500);
      } else if (!data.flat().includes(0)) {
        setTimeout(() => {
          alert(`Defeat! ${$score.textContent}점`);
          startGame();
        }, 500);
      }
    }

    startGame();

    document.querySelector(".newGame").addEventListener("click", startGame);
  }, []);

  return (
    <Window id="Game2048" tabText="게임2048" 닫기={창닫기}>
      <div className="Container">
        <p>방향키를 눌러 게임을 시작하세요. </p>
        <table id="table"></table>
        <div className="wrap">
          SCORE:&nbsp;
          <span id="score">0</span>
        </div>
        <button className="newGame">새 게임</button>
      </div>
    </Window>
  );
}