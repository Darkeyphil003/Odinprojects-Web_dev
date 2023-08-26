
    // Dom Elements
    let coinImg = document.querySelector(".mod").getElementsByTagName("img");
    let primarybtn = document.querySelector(".confirm");
    let playerScore = document.getElementById("player-score");
    let cpuScore = document.getElementById("cpu-score");
    let tiesCount = document.getElementById("tieValue");
    let rngTurn = document.querySelector("#rng-turn");

    
    const ticExandOhX = document.querySelector(".tic-tac .exandoh .fa-x");
    const ticExandOhO = document.querySelector(".tic-tac .exandoh .fa-o");
    const overlay = document.querySelector(".overlay");
    const startModal = document.querySelector(".mod");
    const coin = document.querySelector(".coin");


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
        tails:0
    }
    let tails = headOrTail.tails
    let heads = headOrTail.heads
    
    document.addEventListener("DOMContentLoaded" , () =>{
        startModal.classList.remove("hidden");
        overlay.classList.remove("hidden");

    })
let flipCoin = () =>{
        // removing event listener here to prevent duplicate clicks after animation loads
        coin.removeEventListener("click", flipCoin)
        let i = Math.floor(Math.random() * coinImg.length);
        coin.style.animation = "none";
        // setting flag
        let coinResolved = false;
        //  To decide which one has O or X (Player or CPU)
       const coinFlip = new Promise((resolve, reject) => {
        if(i) { setTimeout(() => {
            coin.style.animation = "spin-heads 3s forwards"
            coinResolved = true; 
            coin.style.cursor = "default";
         }, 100);
          resolve("heads");
          heads++
         }
         else{
             setTimeout(() => {  
                coin.style.animation = "spin-tails 3s forwards"
                coinResolved = true;
                coin.style.cursor = "default";
             }, 100);
             resolve("tails")
             tails++
         }
         primarybtn.classList.remove("hidden");
    
       })
       coin.addEventListener("click" , flipCoin);
    //    triggers after coinFlip has been resolved
        setTimeout(() => {
            coin.style.cursor = "default";
            if(coinResolved === true){
                coin.removeEventListener("click",flipCoin);
                }
            else coin.addEventListener("click" , flipCoin);
        }, 3100);
        console.log(heads,tails);
    // Just a simple promise return for playerTurn for later purposes 
        const showPlayerTurn = async() =>{
            let playerTurn = await coinFlip 
            return playerTurn
        }
        return showPlayerTurn()
    }
    let playerTurn
    //  assigns some variables here for player
    const assignPlayerTurn = () => {
        // Assign the click event listener to the coin
        coin.addEventListener("click", async () => {
            playerTurn = await flipCoin();
            if (playerTurn === "heads") {
                ticExandOhX.classList.remove("hidden");
                ticExandOhO.classList.add("hidden");
                rngTurn.textContent = "Player";
            } else if (playerTurn === "tails") {
                ticExandOhO.classList.remove("hidden");
                ticExandOhX.classList.add("hidden");
                rngTurn.textContent = "Player";
            }
            console.log(playerTurn);
    
            // After the coin flip is resolved, remove the event listener
            coin.removeEventListener("click", this);
        });
    };
    
    assignPlayerTurn();
   
    
    
    
    
    
    assignPlayerTurn();

    // event listeners for both coin and primary button

    primarybtn.addEventListener("click", () =>{
        startModal.classList.add("hidden");
        overlay.classList.add("hidden");
    })
    
    // update scores
    cpuScore.textContent = scores.cpuScoreValue;
    playerScore.textContent = scores.playerScoreValue;
    tiesCount.textContent = scores.ties

 

