//Greeshma Chandra Shekar - C20084146; Girish Raja Gunda - C13275928; Apoorva Gaddam - C55159095

   const h = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const finalScoreValue = document.getElementById('final_score_value');
  const finalScoreInterface = document.querySelector('.final-score');
  const moles = document.querySelectorAll('.mole');
  const level = document.getElementById('game_level');
  const htmlElement = document.documentElement
  let lastHole;
  let timeUp = true;
  let score = 0;
  let max_time = 1000;
  
  
  function endGame()
  {
    timeUp = true;
    finalScoreValue.textContent = score;
    finalScoreInterface.style.display = 'block';
  }

  function startGame() {
    if (timeUp) {
      score = 0;
      scoreBoard.textContent = score;
      timeUp = false;
      level.innerHTML = 'Level Easy';
      htmlElement.style.backgroundColor = '#a9f23a';
      peep();
     setTimeout(() => {
        timeUp = true;

       //setTimeout(() => {
          
          finalScoreValue.textContent = score;
    
          
          finalScoreInterface.style.display = 'block';
      // }, 1000); 
      }, 600000);
    }
  }

  function randomTime(min, max) { 
    return Math.round(Math.random() * (max - min) +2* min);
    const time = randomTime(50, 1000);
  }

  function whack(e) {
    if(!e.isTrusted) return; 
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
    if (score>20 & score<=50){
      level.innerHTML="Level 2"
      htmlElement.style.backgroundColor = "#f2c13a";
      max_time = 800
    }else if(score>50){
      level.innerHTML="Level 3"
      htmlElement.style.backgroundColor = "#f25f3a";
      max_time = 500
    }
    else if(score<=20){
      level.innerHTML="Level 1"
      htmlElement.style.backgroundColor = "#a9f23a";
      max_time = 1000
    }
  }
function peep() {
  if (!timeUp) {
    const time = randomTime(200, max_time);
    const hole = random_Hole(h);

    if (hole.classList.contains('up')) {
      setTimeout(peep, 100);
    } else {
      hole.classList.add('up');

      setTimeout(() => {
        hole.classList.remove('up');
        peep();
      }, time);
    }
  }
}
  function random_Hole(h) {
    if (!timeUp) {
    const idx = Math.floor(Math.random() * h.length);
    const hole = h[idx];
    if (hole === lastHole) {
      return random_Hole(h);
    }
    lastHole = hole;
    return hole;
  }
}


  moles.forEach(mole => mole.addEventListener('click', whack));
  document.getElementById('startGameButton').addEventListener('click', startGame);

  
  document.getElementById('endGameButton').addEventListener('click', endGame);
