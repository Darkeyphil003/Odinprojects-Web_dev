//    Array of the meme pics
   const meme_pics  = [
        'images/handsome-squidward.jpg',
        'images/mike.jpg',
        'images/pepe.jpg'
    ]
    // Array of the images for the user to click on
    const playArray = [
            'images/rock.png',
            'images/scissor.png',
            'images/paper.png'
    ]
    let computer_input_score = 0;
    let user_input_score = 0;
    
    //  Get all the li elements inside of the choices class
    let choicesOfPlayer = document.querySelector(".choices").querySelectorAll("li");

    // simple loop that evaluate the length of the playArray array && choicesofPlayer HTML Collection
    for(let i =0; i<playArray.length && i <choicesOfPlayer.length; i++){
            choicesOfPlayer[i].querySelector('img').src = playArray[i];

    }  
    // Create an array from choicesOfPlayer HTML Collection
    Array.from(choicesOfPlayer);

    // set the user choice function with a promise intact
    // first we loop through the indices of choicesofplayer array according to its length
    //  then we assign a simple event listener to each of them 
   const setUserChoice = new Promise((resolve) => {
        for(let i = 0; i< choicesOfPlayer.length; i++){
            choicesOfPlayer[i].addEventListener("click", () =>{
            resolve(i);
            })
    }})
    
     
    //  roundCount Logic:
    //  I have to get the element object from the .round-count class
    //  after that, i created another variable called current round which starts at 0
    //  after getting access with the .round-count class i assign the variable currentRound into it.
    
    let roundCount = document.querySelector(".round-count");
    let currentRound = 0;
    roundCount.textContent = currentRound;

    //  updateRound logic:
    //  after assigning the currentRound into the roundCount class
    //  i add + 1 into it in order to update it
    // and simply assign the new value back into the textcontent of roundCount
    let updateRound = () => {
        currentRound+=1;
        roundCount.textContent = currentRound;
    }
    // creating a new function... setCpuChoice to the returned promise object from setUserChoice
    // the choice is logged for now for testing purposes
    const setCpuChoice =() => 
    {setUserChoice.then((choice) => {
        console.log(choice);
    })};

    
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
    updateRound();
    setCpuChoice()
    setRandomImage();