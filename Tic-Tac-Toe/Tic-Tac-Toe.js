
    // Dom Elements
    let coinImg = document.querySelector(".mod").getElementsByTagName("img");
    let primarybtn = document.querySelector(".confirm");
    let playerScore = document.getElementById("player-score");
    let cpuScore = document.getElementById("cpu-score");
    let tiesCount = document.getElementById("tieValue");
    let ticExandOh = document.querySelector(".tic-tac .exandoh:first-child");

    const overlay = document.querySelector(".overlay");
    const startModal = document.querySelector(".mod");
    const coin = document.querySelector(".coin");


    console.log(ticExandOh);
    
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

    flipCoin = () =>{
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
          resolve(heads++);
         }
         else{
             setTimeout(() => {  
                coin.style.animation = "spin-tails 3s forwards"
                coinResolved = true;
                coin.style.cursor = "default";
             }, 100);
             resolve(tails++);
         }
         primarybtn.classList.remove("hidden");
    
       })
       
    //    triggers after coinFlip has been resolved
        setTimeout(() => {
            coin.style.cursor = "default";
            if(coinResolved === true){
                coin.removeEventListener("click",flipCoin);
                }
            else coin.addEventListener("click" , flipCoin);
        }, 3100);
        console.log(heads,tails);
    }
    // event listeners for both coin and primary button
    coin.addEventListener("click" , flipCoin)
    primarybtn.addEventListener("click", () =>{
        startModal.classList.add("hidden");
        overlay.classList.add("hidden");
    })
    // update scores
    cpuScore.textContent = scores.cpuScoreValue;
    playerScore.textContent = scores.playerScoreValue;
    tiesCount.textContent = scores.ties

 

