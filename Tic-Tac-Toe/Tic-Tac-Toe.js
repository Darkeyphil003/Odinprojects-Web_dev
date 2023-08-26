
    // Dom Elements
    let coinImg = document.querySelector(".mod").getElementsByTagName("img");
    let primarybtn = document.querySelector(".confirm");
    let playerScore = document.getElementById("player-score");
    let cpuScore = document.getElementById("cpu-score");
    let tiesCount = document.getElementById("tieValue");
    let rngTurn = document.querySelector(".rng-turn");

    const ticTacToe = document.querySelectorAll(".ticTacToe li");
    const ticExandOhX = document.querySelector(".tic-tac .exandoh .fa-x");
    const ticExandOhO = document.querySelector(".tic-tac .exandoh .fa-o");
    const overlay = document.querySelector(".overlay");
    const startModal = document.querySelector(".mod");
    const coin = document.querySelector(".coin");

    let cardPositions
    ticTacToe.forEach(element => {
        cardPositions = Array.from(ticTacToe).slice(0,ticTacToe.length-3);
    });
  
// .exandoh x is fa-x and o is fa-o
// TODO :  board's structure
// TODO : CPU logic
// TODO : Assigning the player's and CPU's turn
    
    let scores ={
        playerScoreValue:0, 
        cpuScoreValue:0,
        ties:0
    }
    let headOrTail = {
        heads:0,
        tails:0, 
        
    }
    let tails = headOrTail.tails
    let heads = headOrTail.heads
    let coinResolved = false;
    // loading up the startmodal
    document.addEventListener("DOMContentLoaded" , () =>{
        startModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
let flipCoin = async() =>{
        let i = Math.floor(Math.random() * coinImg.length);
        coin.style.animation = "none";
        //  To decide which one has O or X (Player or CPU)
       const coinFlip = new Promise((resolve) => {
        if(i) { setTimeout(() => {
            coin.style.animation = "spin-heads 3s forwards"
            coin.style.cursor = "default";
            }, 100);
            resolve("heads");
            coinResolved = true;
            heads++
            // removing event listener here to prevent duplicate clicks after animation loads
            coin.removeEventListener("click", flipCoin);
         }
         else{
             setTimeout(() => {  
                coin.style.animation = "spin-tails 3s forwards"
                coin.style.cursor = "default";
             }, 100);
                 coinResolved = true;
                resolve("tails");
                tails++
                  // removing event listener here to prevent duplicate clicks after animation loads
            coin.removeEventListener("click", flipCoin);
         }
         primarybtn.classList.remove("hidden");
       })
       console.log(heads,tails);
       const playerTurn = await coinFlip;
       console.log(playerTurn);
   
       return playerTurn;
}

    //  assigns some variables here for player
    const assignValues = async() => {
        // Assign the click event listener to the coin
        let PLAYER = await flipCoin();
            let CPU;
           
            // first turn
                if (PLAYER === "heads") {
                    ticExandOhX.classList.remove("hidden");
                    ticExandOhO.classList.add("hidden");
                    rngTurn.textContent = "Player" ;
                   CPU = "tails"

                } else if (PLAYER === "tails") {
                    ticExandOhX.classList.remove("hidden");
                    ticExandOhO.classList.add("hidden");
                    rngTurn.textContent = "CPU";
                    CPU = "heads";

            }
            
            console.log(CPU);
            
            cardPositions.forEach(position => {
                position.addEventListener("click" , ()=>{
                    console.log(position);
                })
               });
   
    };
   
   

    // event listeners for both coin and primary button
    coin.addEventListener("click" , flipCoin);
    primarybtn.addEventListener("click", () =>{
        startModal.classList.add("hidden");
        overlay.classList.add("hidden");
       assignValues();
    })
    
    // update scores
    cpuScore.textContent = scores.cpuScoreValue;
    playerScore.textContent = scores.playerScoreValue;
    tiesCount.textContent = scores.ties

 

