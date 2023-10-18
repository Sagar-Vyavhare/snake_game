// import { boxSize } from "./variables";
const foodPosition = { x: 1, y: 1 };
const snakePosition = [{ x: 1, y: 1 }];
const gameBoard = document.querySelector(".game-board");
const food = document.createElement("div");
const snake = document.createElement("div");
let direction = "";
snake.style.gridColumnStart = snakePosition[0].x;
snake.style.gridRowStart = snakePosition[0].y;
snake.classList.add("snake");
gameBoard.append(snake);

food.style.gridColumnStart = foodPosition.x;
food.style.gridRowStart = foodPosition.y;
food.classList.add("foods");
gameBoard.append(food);



const changeFoodPosition = () => {
  gameBoard.removeChild(food);
  foodPosition.x = (Math.random() * 25).toFixed();
  foodPosition.y = (Math.random() * 25).toFixed();
  food.style.gridColumnStart = foodPosition.x;
  food.style.gridRowStart = foodPosition.y;
  food.classList.add("foods");
  gameBoard.append(food);
};

const moveSnake = () => {
  gameBoard.removeChild(snake);
  switch (direction) {
    case "ArrowDown":
      console.log("ArrowDown");
      snakePosition[0].y = snakePosition[0].y + 1;
      break;
    
    case "ArrowUp":
      console.log("ArrowUp");
      snakePosition[0].y = snakePosition[0].y - 1;
      break;
    
    case "ArrowLeft":
      console.log("ArrowLeft");
      snakePosition[0].x = snakePosition[0].x - 1;
      break;

    default:
      console.log("default");
      snakePosition[0].x = snakePosition[0].x + 1;
      break;
  }

  if (snakePosition[0].x == foodPosition.x && snakePosition[0].y == foodPosition.y) {
    changeFoodPosition();

  }
  // snakePosition[0].y = snakePosition[0].y + 1;
  snake.style.gridColumnStart = snakePosition[0].x;
  snake.style.gridRowStart = snakePosition[0].y;
  gameBoard.append(snake);
  if (snakePosition[0].x >= 25) {
    clearInterval(sagar);
  } else if (snakePosition[0].x < 1) {
    clearInterval(sagar);
  } else if (snakePosition[0].y < 1) {
    clearInterval(sagar);
  } else if (snakePosition[0].y >=25) {
    clearInterval(sagar);
  }
  else {
    return
  }
};

const sagar = setInterval(() => {
    // changeFoodPosition();
  document.addEventListener("keyup", (e) => {
    direction = e.key;
    console.log(e.key);
  });
  moveSnake();
}, 100);

