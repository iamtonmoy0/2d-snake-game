const gameBoard = document.getElementById('game-board')


let scaleX, scaleY;
let snakeX = 10,
	snakeY = 16;
// velocity
let velocityX = 0,
	velocityY = 0;
// food  position change 
const snakeFood = () => {
	scaleX = Math.floor(Math.random() * 30) + 1;
	scaleY = Math.floor(Math.random() * 30) + 1;
	// console.log(scaleX, scaleY)
}
const changeDir = (e) => {
	if (e.key === "ArrowUp") {
		velocityX = 0;
		velocityY = -1;
	} else if (e.key === "ArrowDown") {
		velocityX = 0;
		velocityY = 1;
	} else if (e.key === "ArrowRight") {
		velocityX = 1;
		velocityY = 0;
	}
	if (e.key === "ArrowLeft") {
		velocityX = -1;
		velocityY = 0;
	}

}
const initGame = () => {
	let foodHtml = `<div id="food" style="grid-area:${scaleY}/${scaleX}"> </div>`;
	if(snakeX==scaleX&&snakeY==scaleY){
		snakeFood()
		
	}
	snakeX += velocityX;
	snakeY += velocityY;
	foodHtml += `<div id="snake" style="grid-area:${snakeY}/${snakeX}"> </div>`;

	gameBoard.innerHTML = foodHtml;
}
snakeFood()
setInterval(initGame, 125)
document.addEventListener("keydown", changeDir)