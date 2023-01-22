// generate a random choice for the computer rock paper or scissors
function getComputerChoice(){
    let choices =["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];

}

// console.log(getComputerChoice());

// need to prompt human for their choice

function promptForChoice() {
    while(true){
        let userInput = prompt("Please choose between " + "Rock" + ", " + "Paper" + ", " + "Scissors" + ":");
        let modifyuserInput = userInput.toLowerCase();
        if (modifyuserInput === "rock" || modifyuserInput === "paper" || modifyuserInput === "scissors") {
            return modifyuserInput;
            break;
            // console.log("You chose " + userInput + ".");
        }else {
            console.log("Invalid choice, please try again.");
            // promptForChoice();
        }
    }
    
}

function newchoicepc(){   
    let computerchoice=getComputerChoice();
    return computerchoice;
    }
function newchoiceuser(){   
    let userchoice=promptForChoice();
    return userchoice;
}
// console.log("computer choice "+newchoicepc()+" userchoice "+newchoiceuser());


// console.log(promptForChoice());


//need to compare the two and output a winner
function playround(){
    computerchoice=newchoicepc();
    userchoice=newchoiceuser();
    if (computerchoice === userchoice){
        console.log("Tie");
    } else if(computerchoice === "rock"&& userchoice ==="scissors" || computerchoice==="paper" && userchoice==="rock"
    || computerchoice==="scissors"&& userchoice==="paper"){
        console.log("Computer wins")
    } else{
        console.log("You Win!")
    }
    }

function playrounds(){
    for (let i = 0; i < 5; i++) {
        playround();
     }
}



// console.log(playrounds())