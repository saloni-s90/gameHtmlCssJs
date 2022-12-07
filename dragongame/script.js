score = 0;
cross = true;
document.onkeydown = function(e){
	if(e.keyCode == 38)
	{
		console.log(e.keyCode)
		dino = document.querySelector('.dino');
		console.log("dino ",dino)
		dino.classList.add('animateDino');
		setTimeout(() => {
			console.log("yes")
			dino.classList.remove('animateDino')
		},700);
	}

	if(e.keyCode == 39)
	{
		dino = document.querySelector('.dino')
		dinoX = parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'))
		dino.style.left = dinoX + 112 +"px"
	}

	if(e.keyCode == 37)
	{
		dino = document.querySelector('.dino')
		dinoX = parseInt( window.getComputedStyle(dino,null).getPropertyValue('left'))
		dino.style.left = (dinoX - 112) +"px"
	}
}

setInterval(()=>{
	dino = document.querySelector('.dino')
	gameOver = document.querySelector('.gameOver')
	obstacle = document.querySelector('.obstacle')

	//shinchan collide
	dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
	dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('bottom'))

	//rabbit collide
	ox =  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'))
	oy =  parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('bottom'))

	offsetX = Math.abs(dx-ox)
	offsetY = Math.abs(dy-oy)

	console.log(offsetX,offsetY)

	if(offsetX < 50 && offsetY < 30)
	{
		gameOver.style.visibility = 'visible';
		obstacle.classList.remove('obstacleAni')
	}
	else if(offsetX< 200 && cross)
	{
		score += 1;
		updateScore(score)
		cross = false
		setTimeout(() => {
			cross = true
		},2000)

		setTimeout(() => {
			aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
			newDur = aniDur - 0.1;
			obstacle.style.animationDuration = newDur + 's';
		},500)
	}
},10);

function updateScore(score){
	scoreCont.innerHTML = " Your Score : "+score
}