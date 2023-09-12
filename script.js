const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    
    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['rock', 'paper', 'scissors']
        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
                winner(this.innerText, computerChoice)
                if (playerScore =='5' || computerScore == '5'){
                    gameOver(playerOptions);
                }
            });
        });
    }

    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-points');
        const computerScoreBoard = document.querySelector('.c-points');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer){
            result.textContent = 'Tie';
        }
        else if(player == 'rock'){
            if (computer == 'paper'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'You Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if (computer == 'rock'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'You Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if (computer == 'scissors'){
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'You Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }

    }

    const gameOver = (playerOptions) => {
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
        const chooseWeapon = document.querySelector('.main-content');
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })

        chooseWeapon.innerText = 'Game Over!'
        chooseWeapon.style.fontSize = '30px'

        if (playerScore > computerScore){
            result.innerText = 'You Won the Game';
        }
        else if(playerScore < computerScore){
            result.innerText = 'You Lose the Game';
        }
        else{
            result.innerText = 'Draw!';
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'inline';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    playGame();

}

game();