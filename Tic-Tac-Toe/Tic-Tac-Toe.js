// Dom Elements
const coinImg = document.querySelector(".mod").getElementsByTagName("img");
const primarybtn = document.querySelector(".confirm");
const ticTacToe = document.querySelectorAll(".ticTacToe li");
const ticExandOhX = document.querySelector(".tic-tac .exandoh .fa-x");
const ticExandOhO = document.querySelector(".tic-tac .exandoh .fa-o");
const overlay = document.querySelector(".overlay");
const startModal = document.querySelector(".mod");
const coin = document.querySelector(".coin");
const lists = document.querySelectorAll(".ticTacToe li");

let playerScore = document.getElementById("player-score");
let cpuScore = document.getElementById("cpu-score");
let tiesCount = document.getElementById("tieValue");
let rngTurn = document.querySelector(".rng-turn");


// .exandoh x is fa-x and o is fa-o
// TODO : board's structure
// TODO : CPU logic
// TODO : Assigning the player's and CPU's turn

// !important: Perform an evaluation for every turn.
// TODO : apply the player's decision into a clickable listener
// TODO : Update the score dynamically when the round has ended and a winner is decided.
// TODO : To update the score inside the round-based system.
let scores = {
    PLAYERScore:0,
    CPUScore:0,
    Ties:0
}

let result;
let CPU;
// Destructuring these for later use
let {PLAYERScore, CPUScore,Ties} = scores;
// Setting scores:
let updateScores = () => {
    playerScore.textContent = PLAYERScore;
    cpuScore.textContent = CPUScore;
    tiesCount.textContent = Ties;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    startModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
});
flipCoin();
let cardPositions = Array.from(lists).splice(0, lists.length-3);

primarybtn.addEventListener("click", () => {
    startModal.classList.add("hidden");
    overlay.classList.add("hidden");
    // Start the game by assigning values and handling turns
    assignValues();
});


// Function to handle the coin flip
function flipCoin() {
    let coinLogic = {
        heads:0,
        tails:0,
        coinResolved:false
    }
let {heads, tails, coinResolved} = coinLogic;
  
        let i = Math.floor(Math.random() * coinImg.length);
       
        coin.addEventListener("click",  () => {
            if (!coinResolved) {
               
            if (i) {
                    coin.style.animation = "spin-heads 3s forwards";
                    coin.style.cursor = "default";
                    heads++;
                   result = "heads";
            } 
            else {
                    coin.style.animation = "spin-tails 3s forwards";
                    coin.style.cursor = "default";
                    tails++;
                   result = "tails";
                   
            }
                coinResolved = true;
                setTimeout(() => {
                    primarybtn.classList.remove("hidden");
                }, 3100);
                
            }
        });
       
        console.log(heads,tails);
  
}

// Function to apply X when player's turn is heads 
let playerHeads =()=>{
    ticExandOhX.classList.remove("hidden");
    ticExandOhO.classList.add("hidden");
    rngTurn.textContent = "Player";
} 
// Function to apply O when player's turn is tails 

let playerTails = () =>{
    ticExandOhO.classList.remove("hidden");
    ticExandOhX.classList.add("hidden");
    rngTurn.textContent = "Player";
}
// Function to apply O when cpu's turn is tails 

let cpuTails =()=>{
    ticExandOhO.classList.remove("hidden");
    ticExandOhX.classList.add("hidden");
    rngTurn.textContent = "CPU";
}

let cpuHeads = () =>{
    ticExandOhX.classList.remove("hidden");
    ticExandOhO.classList.add("hidden");
    rngTurn.textContent = "CPU";
}
// Function to assign values for player and CPU turns
 function assignValues() {
    // result of the flipCoin

let PLAYER = result;
let CPUdecision
let turns = {
    playerturn:false,
    cputurn:false
}

let {playerturn, cputurn} = turns;

let assignPLAYERturn = () =>{
   
    playerturn = !playerturn;
 }
 let assignCPUTurn =() =>{
     CPUdecision = Math.floor(Math.random() * cardPositions.length+1);
    cputurn = !cputurn;
     
    console.log(CPUdecision);
 }
   
    // First turn setting initial values
    if (PLAYER === "heads") {
        playerHeads();
        CPU = "tails";
        assignPLAYERturn();
     } else if(PLAYER === "tails"){
        cpuTails();
        assignCPUTurn();
        CPU = "heads";
     }
 
// TODO : Create a new round based function/Class for switching betweent the player and the CPU's turn.
// TODO : Assigning the undo button's functionalities
// TODO : The round function evaluates the cardcontainers for winning patterns: refer to notepad.
// TODO : For the CPU when the player's turn has been decided... CPU's turn should also be decided.
// TODO : Create a random generation AI that picks one cardContainer as it's turn. 
 
    // Apply click event listener to card positions
    cardPositions.forEach((position) => {
        position.addEventListener("click", () => {
            // assigning the card value's index from the position;
            const exandohO = position.querySelector(".fa-o");
            const exandohX = position.querySelector(".fa-x");


            if(PLAYER === 'heads' && playerturn === true){
            exandohX.classList.remove("hidden");
            assignPLAYERturn();
            assignCPUTurn();
            playerHeads();
            }
            else if(PLAYER === "tails" && playerturn === true){
                exandohO.classList.remove("hidden");
                assignPLAYERturn();
                assignCPUTurn();
                playerTails();
            }
          
            // Update game state and check for win/draw conditions
        });
      
            //    setup for cpu logic later on
           
         function cpuTurn(){
            if (CPU === "heads" && cputurn === true){
                cpuTails();
                cputurn =false;
                playerturn = true;
            }
            else if( CPU === "tails" && cputurn === true){

            };
            let cpuindex = cardPositions[CPUdecision];
            let cpuexandohO = cpuindex.querySelector(".fa-o");
            let cpuexandohX = cpuindex.querySelector(".fa-x");
            console.log(cpuexandohO, cpuexandohX);
         } 
    });

    
}
