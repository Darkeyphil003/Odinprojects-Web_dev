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
    let computer_input_score = 0;
    let user_input_score = 0;
    let userChoice;

    //  Get all the li elements inside of the choices class
    let choicesOfPlayer = document.querySelector(".choices").getElementsByTagName('li');

    // simple loop that evaluate the length of the playArray array && choicesofPlayer HTML Collection
    for(let i =0; i<playArray.length && i <choicesOfPlayer.length; i++){
            choicesOfPlayer[i].querySelector('img').src = playArray[i];

    }  

    //  array that sets the user choice to a variable called userChoice
    //  we use a for of 
    const setUserChoice = () => {
        for (const element of choicesOfPlayer) {
            element.addEventListener("click", () => {
                userChoice = Array.from(choicesOfPlayer).indexOf(element);
            });
        }
    };
    
    setUserChoice();    

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
    updateRound();
    // playLogic

   

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
    
    setRandomImage();