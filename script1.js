<!--
Greeshma Chandra Shekar - C20084146
Girish Raja Gunda - C13275928
Apoorva Gaddam - C55159095
-->

  const h = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;

  function startGame() {
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    peep();
    setTimeout(() => {
      timeUp = true;

      setTimeout(() => {
        const finalScoreValue = document.getElementById('final_score_value');
        finalScoreValue.textContent = score;
  
        const finalScoreInterface = document.querySelector('.final-score');
        finalScoreInterface.style.display = 'block';
      }, 1000); 
    }, 600000);
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
  }
function peep() {
  if (!timeUp) {
    const time = randomTime(200, 1000);
    const hole = random_Hole(h);

    if (hole.classList.contains('up')) {
      setTimeout(peep, 100);
    } else {
      hole.classList.add('up');

      setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
      }, time);
    }
  }
}
  function random_Hole(h) {
    const idx = Math.floor(Math.random() * h.length);
    const hole = h[idx];
    if (hole === lastHole) {
      return random_Hole(h);
    }
    lastHole = hole;
    return hole;
  }


  moles.forEach(mole => mole.addEventListener('click', whack));
