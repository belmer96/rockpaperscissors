// generate a random choice for the computer rock paper or scissors
off();
let scoreplayer=0;
console.log("playerscore is"+scoreplayer);
let scorecomputer=0;
console.log("pc score is"+scorecomputer);
function getComputerChoice(){
    let choices =["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];

}
// dom selector/changer section

// we use the .forEach method to iterate through each button
 
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let x=button.id.toString();
        playround(x);
    });
    });

    

    


function newchoicepc(){   
    let computerchoice=getComputerChoice();
    return computerchoice;
    }




//need to compare the two and output a winner


function playround(x){
        computerchoice=newchoicepc();
        userchoice=x;
        
        
        //     // need to turn on an overlay research overlay methods

        // }
        
        console.log("userchoice is "+userchoice);
        if (userchoice!=undefined&&scoreplayer!=5&&scorecomputer!=5){
            if (computerchoice === userchoice){
                console.log("Tie");
            } else if(computerchoice === "rock"&& userchoice ==="scissors" || computerchoice==="paper" && userchoice==="rock"
            || computerchoice==="scissors"&& userchoice==="paper"){
                console.log("Computer wins")
                scorecomputer++;
                const computervalue = document.querySelector('#computerscore');
                computervalue.textContent=scorecomputer;
            } else{
                console.log("You Win!")
                scoreplayer++;
                const playervalue = document.querySelector('#playerscore');
                playervalue.textContent=scoreplayer;
            }
            }
        console.log("playerscore is"+scoreplayer);
        if(scoreplayer==5||scorecomputer==5){
            if (scoreplayer==5){
                on('images/numa.gif');
                let resultsDiv = document.getElementById("results");
                let weaponDiv = resultsDiv.getElementsByClassName("weapon")[0];
                let rulesDiv = resultsDiv.getElementsByClassName("rules")[0];

                weaponDiv.textContent = "YOU WON!";
                rulesDiv.textContent = " ";

            }
            if(scorecomputer==5){
                on('images/pctrash.gif');
                
                let resultsDiv = document.getElementById("results");
                let weaponDiv = resultsDiv.getElementsByClassName("weapon")[0];
                let rulesDiv = resultsDiv.getElementsByClassName("rules")[0];

                weaponDiv.textContent = "YOU LOST!";
                rulesDiv.textContent = " ";
            }
}
}

function on(gif) {
    
    document.getElementById("overlaycontainer").style.zIndex = 5;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").style.backgroundImage = "url("+gif+")";
    scoreplayer = 0;
    scorecomputer = 0;
    const computervalue = document.getElementById("computerscore");
    computervalue.textContent = scorecomputer;
    const playervalue = document.getElementById("playerscore");
    playervalue.textContent = scoreplayer;
    var ax = document.getElementById("audio"); 
    var axs = document.getElementById("audio2"); 
    if(gif=='images/numa.gif'){
        ax.autoplay = true; 
        ax.load();
        ax.loop=true;
    }
    if(gif=='images/pctrash.gif'){
        axs.autoplay = true; 
        axs.load();
        // axs.loop=true;
    }

    document.getElementById("closebutton").addEventListener("click", function(){
        off();
        location.reload();
    })
 

   
}

function off() {
    document.getElementById("overlay").style.display = "none";
    
    
    
}
