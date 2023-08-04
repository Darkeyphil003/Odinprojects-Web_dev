    const meme_pics  = [
        'images/handsome-squidward.jpg',
        'images/mike.jpg',
        'images/pepe.jpg'
    ]
    const playArray = [
            'images/rock.png',
            'images/scissor.png',
            'images/paper.png'
    ]

  

    //  Get all the li elements inside of the choices class
    let choicesOfPlayer = document.querySelector(".choices").getElementsByTagName('li');

    // simple loop that evaluate the length of the playArray array && choicesofPlayer HTML Collection
    for(let i =0; i<playArray.length && i <choicesOfPlayer.length; i++){
            choicesOfPlayer[i].querySelector('img').src = playArray[i];
    }
    
    // setCpuChoice logic here:
    // self-explanatory with the random 
        const setCpuChoice = async() =>{
        const cpuChoice = Math.floor(Math.random()*playArray.length)
        return cpuChoice;
        }
    // set the user choice function with a promise intact
    // first we loop through the indices of choicesofplayer array according to its length
    //  then we assign a simple event listener to each of them 
    const setUserChoice = new Promise((resolve) => {
        for(let i = 0; i< choicesOfPlayer.length; i++){
            choicesOfPlayer[i].addEventListener("click", () =>{
            resolve(i);
            })
    }})
    let computer_score = 0;
    let user_score = 0;
    const evaluateLogic = (userChoice, cpuChoice) =>{
       
      let updatedScores = { userScore:user_score, cpuScore:computer_score }
        if (userChoice === cpuChoice) {
            updateRound()
          } else if (
            (userChoice === 0 && cpuChoice === 1) ||
            (userChoice === 2 && cpuChoice === 0) ||
            (userChoice === 1 && cpuChoice === 2)
          ) {
            updateRound()
            updatedScores.userScore+=1;
            
          } else {
            updateRound()
            updatedScores.cpuScore+=1;
          }

          return updatedScores;
         
    }
 


    //  roundCount Logic:
    //  I have to get the element object from the .round-count class
    //  after that, i created another variable called current round which starts at 0
    //  after getting access with the .round-count class i assign the variable currentRound into it.
    
    let roundCount = document.querySelector(".round-count");
    let currentRound = 1;
    roundCount.textContent = currentRound;

    //  updateRound logic:
    //  after assigning the currentRound into the roundCount class
    //  i add + 1 into it in order to update it
    // and simply assign the new value back into the textcontent of roundCount
    let updateRound = () => {
        currentRound+=1;
        roundCount.textContent = currentRound;
    }
   
const getRandomImage = () =>{
        const randomIndex = Math.floor(Math.random() * meme_pics.length);
        return meme_pics[randomIndex];
      } 

    const setRandomImage = () => {
        const imageRandomIndexCpu = getRandomImage();
        const imageRandomIndexUser = getRandomImage();
        const randomImageCpu = document.querySelector(".cpu-img");
        const randomImageUser = document.querySelector(".user-img");
        
        randomImageCpu.src = imageRandomIndexCpu;
        randomImageUser.src = imageRandomIndexUser;
}

      // playLogic
     // creating a new async function... playGame this function will handle all the logic of the game
     
    const playGame = async() => 
    {
       let userChoice = await setUserChoice;
       let cpuChoice = await setCpuChoice();

        // evaluation of the choices
        const updateScores = await evaluateLogic(userChoice, cpuChoice);
        
        user_score = updateScores.userScore;
        computer_score = updateScores.cpuScore;
        console.log(`${userChoice},  ${cpuChoice}`);
        console.log(`${user_score} ${computer_score}`);
        
    };
    setRandomImage();
    playGame();
    