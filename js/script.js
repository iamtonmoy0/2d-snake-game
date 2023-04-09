const gameBoard = document.getElementById('game-board')
const scoreCount =document.getElementById('score')
const bestScore=document.getElementById('high-score')
let score =0;
let scaleX, scaleY;
let gameOver=false;
let snakeBody = [];
let intervalID;
let snakeX = 10,
	snakeY = 16;
	let highScore= localStorage.getItem("high-score")||0;
	bestScore.innerText=`High Score: ${highScore}`

// velocity
let velocityX = 0,
	velocityY = 0;
// food  position change 
const snakeFood = () => {
	scaleX = Math.floor(Math.random() * 30) + 1;
	scaleY = Math.floor(Math.random() * 30) + 1;
	// console.log(scaleX, scaleY)
}
// game over alert
const handleGameOver=()=>{
	alert('game is over!!!!')
	clearInterval(intervalID)
	location.reload()
}
const changeDir = (e) => {
	if (e.key === "ArrowUp" && velocityY!=1) {
		velocityX = 0;
		velocityY = -1;
	} else if (e.key === "ArrowDown" && velocityY!=-1) {
		velocityX = 0;
		velocityY = 1;
	} else if (e.key === "ArrowRight" && velocityX!=-1) {
		velocityX = 1;
		velocityY = 0;
	}
	if (e.key === "ArrowLeft" && velocityX!=1) {
		velocityX = -1;
		velocityY = 0;
	}

}
const initGame = () => {
	if(gameOver)return handleGameOver();
	let foodHtml = `<div id="food" style="grid-area:${scaleY}/${scaleX}"> </div>`;
	if (snakeX == scaleX && snakeY == scaleY) {
		snakeFood()
		snakeBody.push([scaleX, scaleY])
		score++;
		highScore= score>=highScore?score:highScore;
		localStorage.setItem("high-score",highScore);
		scoreCount.innerText=`Score ${score}`
		
	}
	snakeBody[0] = [snakeX, snakeY];
	for (let i = snakeBody.length - 1; i > 0; i--) {
		snakeBody[i] = snakeBody[i-1];

	}
	snakeX += velocityX;
	snakeY += velocityY;
	if(snakeX<=0||snakeY>30||snakeX>30||snakeY<=0){
		gameOver=true;
	}
	for (let i = 0; i < snakeBody.length; i++) {
	
		foodHtml += `<div id="head" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}"> </div>`;
		// if snake bite itself
		// if (i !== 0 && snakeBody[0][1] === snakeBody[0][0] && snakeBody[0][0] === snakeBody[i][0]) {
			// gameOver=true;
			
		// }
	}
	foodHtml += `<div id="snake" style="grid-area:${snakeY}/${snakeX}"> </div>`;

	gameBoard.innerHTML = foodHtml;
}
snakeFood()
intervalID =setInterval(initGame, 125)
document.addEventListener("keydown", changeDir)