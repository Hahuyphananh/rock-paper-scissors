let score = 
        JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0};
        
        document.querySelector('.Js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      
       let isAutoPlaying = false;
       let intervalId;
       
       //const autoPlay = () => {};

        function autoPlay(){
          if(!isAutoPlaying){
            intervalId = setInterval(() => {
              const playerMove = pickComputerMove();
              playGame(playerMove);
            }, 100);
          isAutoPlaying = true;
          } else{
            clearInterval(intervalId);
            isAutoPlaying = false;
          }
        }

        document.querySelector('.js-rock-button').addEventListener('click', () => {
          playGame('rock');
        });

        document.querySelector('.js-paper-button').addEventListener('click', () => {
          playGame('paper');
        });

        document.querySelector('.js-scissors-button').addEventListener('click', () => {
          playGame('scissors');
        });
       
       document.body.addEventListener('keydown', (event) => {
        if(event.key === 'r'){playGame('rock');}
        else if(event.key === 'p'){playGame('paper');}
        else if(event.key === 's'){playGame('scissors');}
        else{console.log('does not play');}
       });
       
        //player move function
        function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'loss.';
          } else if (computerMove === 'paper') {
            result = 'Win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
            if (computerMove === 'rock') {
            result = 'loss.';
        } else if (computerMove === 'paper') {
            result = 'Win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
          
        } else if (playerMove === 'rock') {
            if (computerMove === 'rock') {
            result = 'loss.';
          } else if (computerMove === 'paper') {
            result = 'Win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }
        }
        //tracker for number of wins, losses and ties
        if(result === 'Win.'){score.wins += 1;} else if(result === 'loss.'){score.losses += 1;} 
        else if(result === 'Tie.'){score.ties += 1;}

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        document.querySelector('.js-result').innerHTML = `It's a ${result}`;
        document.querySelector('.js-moves').innerHTML = `You <img src = "images/${playerMove}-emoji.png" class = "images">
      <img src = "images/${computerMove}-emoji.png" class="images">
    Computer`;
      }

     function updateScoreElement(){
        document.querySelector('.Js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
     
      //computer move function
      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }

     