
document.addEventListener("DOMContentLoaded", () =>{
    let playerScore = document.getElementById("player-score");
    let cpuScore = document.getElementById("cpu-score");
    let tiesCount = document.getElementById("tieValue");

    let scores ={
        playerScoreValue:0, 
        cpuScoreValue:0,
        ties:0
    }
    cpuScore.textContent = scores.cpuScoreValue;
    playerScore.textContent = scores.playerScoreValue;
    tiesCount.textContent = scores.ties
})



