const choices = document.querySelectorAll('.choice');
const winnerBox = document.querySelector('.winner-box h1');
const computerScoreElem = document.querySelector('.scorebox h2:nth-of-type(1)');
const userScoreElem = document.querySelector('.scorebox h2:nth-of-type(2)');
let computerScore = 0;
let userScore = 0;
// Function to get a random choice for the computer
const getComputerChoice=()=>{
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};
// Function to determine the winner of a round
const determineWinner=(userChoice, computerChoice)=>{
    if (userChoice===computerChoice) return 'tie';
    if (
        (userChoice==='rock' && computerChoice==='scissors') ||
        (userChoice==='paper' && computerChoice==='rock') ||
        (userChoice==='scissors' && computerChoice==='paper')
    ){
        return 'user';
    }
    return 'computer';
};
// Function to update the scores
const updateScores=()=>{
    computerScoreElem.textContent=`Computer Score: ${computerScore}`;
    userScoreElem.textContent=`User Score: ${userScore}`;
};
// Function to update the result display
const updateResultDisplay=(result)=>{
    switch (result){
        case 'tie':
            winnerBox.textContent="It's a tie!";
            winnerBox.style.color='blue';
            break;
        case 'user':
            winnerBox.textContent="You win!";
            winnerBox.style.color='green';
            break;
        case 'computer':
            winnerBox.textContent="Computer wins!";
            winnerBox.style.color='red';
            break;
    }
};
choices.forEach(choice=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.classList[0]; // Get the user's choice
        const computerChoice=getComputerChoice(); // Get the computer's choice
        const result=determineWinner(userChoice, computerChoice);
        // Update the result display
        updateResultDisplay(result);
        // Update scores
        if (result==='user'){
            userScore++;
        } else if(result==='computer'){
            computerScore++;
        }
        updateScores();
    });
});
updateScores();