let userScore = 0;
let compScore = 0;
const result_div =  document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const body_div = document.getElementById("changeTheColor");
const heart1_div = document.getElementById("hrt1");
const heart2_div = document.getElementById("hrt2");
const heart3_div = document.getElementById("hrt3");
const heart4_div = document.getElementById("hrt4");
const heart5_div = document.getElementById("hrt5");
const cheart1_div = document.getElementById("chrt1");
const cheart2_div = document.getElementById("chrt2");
const cheart3_div = document.getElementById("chrt3");
const cheart4_div = document.getElementById("chrt4");
const cheart5_div = document.getElementById("chrt5");

function anotherGame(){
    window.location.reload();
}

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter){
    if (letter === "r") return "Sword";
    if (letter === "s") return "Axe";
    if (letter === "p") return "Lance";
}




function win(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice);
    userScore++;
    result_div.innerHTML = `${convertToWord(userChoice)}    Beats   ${convertToWord(computerChoice)} You WON this round!` ;
    body_div.classList.add('greenish-glow');
    setTimeout(function(){body_div.classList.remove('greenish-glow')}, 1500);
     userChoice_div.classList.add('green-glow');
     setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 500);
     cheart1_div.style.display='none';
    if(userScore === 2){
        cheart2_div.style.display='none';
    } else if (userScore === 3){
        cheart3_div.style.display='none';
    } else if (userScore === 4){
        cheart4_div.style.display='none';
    } else if (userScore === 5){
        cheart5_div.style.display='none';
        paper_div.style.display='none';
        rock_div.style.display='none';
        scissors_div.style.display='none';
        result_div.innerHTML = "Victory!";
        result_div.style.fontSize="350%";
    }
}


function lose(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice);
    compScore++;
    result_div.innerHTML = `${convertToWord(computerChoice)}    Beats   ${convertToWord(userChoice)} You LOST this round.`;
    body_div.classList.add('redish-glow');
    setTimeout(function(){body_div.classList.remove('redish-glow')}, 1500);
    userChoice_div.classList.add('red-glow');
     setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 500);
    heart1_div.style.display='none';
    if(compScore === 2){
        heart2_div.style.display='none';
    } else if (compScore === 3){
        heart3_div.style.display='none';
    } else if (compScore === 4){
        heart4_div.style.display='none';
    } else if (compScore === 5){
        heart5_div.style.display='none';
        result_div.innerHTML = "Defeat."
        paper_div.style.display='none';
        rock_div.style.display='none';
        scissors_div.style.display='none';
        result_div.style.fontSize="350%";
    }
    

    
}

function tie(userChoice, computerChoice){
    const userChoice_div =  document.getElementById(userChoice);
    result_div.innerHTML = `You both chose ${convertToWord(userChoice)} which ends in no one's favor.` ;
    body_div.classList.add('grayish-glow');
    setTimeout(function(){body_div.classList.remove('grayish-glow')}, 1500);
    userChoice_div.classList.add('gray-glow');
     setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 500);
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(userChoice, computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })

}

main();
