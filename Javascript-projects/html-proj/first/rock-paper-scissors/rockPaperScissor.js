    const meme_pics  = [
        'images/handsome-squidward.jpg',
        'images/mike.jpg',
        'images/pepe.jpg'
    ]
    const playThing = [
            'images/rock.png',
            'images/scissor.png',
            'images/paper.png'
    ]
    let computer_input_score;
    let user_input_score;

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
    updateRound = () => {
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
    setRandomImage();
    
   
    
    