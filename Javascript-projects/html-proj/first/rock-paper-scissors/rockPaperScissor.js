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
  // initialize all the dom elements
  let roundcount = document.querySelector(".round-count");

  let choices = document.querySelector(".choices").getElementsByTagName("li");

  // initialize objects
  const randomImgCpu = new ArrayFunc(meme_pics);
  const randomImgUser = new ArrayFunc(meme_pics);
  const choicesOfPlayer = new ArrayFunc(playArray);
  let roundCount = new RoundCounter(roundcount);


  // Setting images for every img element
  randomImgCpu.setSrc(document.querySelector(".cpu-img"));
  randomImgUser.setSrc(document.querySelector(".user-img"));
  choicesOfPlayer.setImgs(choices);

  // round functionalities
  roundCount.roundUpdate();
  //  game being started
    // let game = new PlayGame(choices, healthbar.height, healthbar.width, 100, "green" )  
  let game = new PlayGame(choices );  
 
  
game.gameUpdate();
 

