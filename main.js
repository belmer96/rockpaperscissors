// generate a random choice for the computer rock paper or scissors
function getComputerChoice(){
    let choices =["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];

}

console.log(getComputerChoice());

// need to prompt human for their choice

function promptForChoice() {
    while(true){
        let userInput = prompt("Please choose between " + "rock" + ", " + "paper" + ", " + "scissors" + ":");
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput;
            break;
            // console.log("You chose " + userInput + ".");
        } else {
            console.log("Invalid choice, please try again.");
            promptForChoice();
        }
    }
    
}

console.log(promptForChoice());





//need to compare the two and output a winner