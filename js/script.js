const gameBoard=document.getElementById('game-board')

let scaleX , scaleY;
let snakeX=10,snakeY=16;
// food  position change 
const snakeFood=()=>{
	scaleX= Math.floor(Math.random()* 30) + 1;
	scaleY= Math.floor(Math.random()* 30) + 1;
	// console.log(scaleX, scaleY)
}
const initGame=()=>{
	let foodHtml=`<div id="food" style="grid-area:${scaleY}/${scaleX}"> </div>`;
   foodHtml+=`<div id="snake" style="grid-area:${snakeY}/${snakeX}"> </div>`;
     
	gameBoard.innerHTML=foodHtml;
}
snakeFood()
initGame()
