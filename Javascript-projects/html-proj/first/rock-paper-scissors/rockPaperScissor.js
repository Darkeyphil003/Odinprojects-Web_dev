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
  const choices = document.querySelector(".choices").getElementsByTagName("li");
  const cpu = document.querySelector(".cpu h2");
  const user = document.querySelector(".user h2")
  let visualHealthCpu = getComputedStyle(document.querySelector(".health-bar-cpu"));
  let visualHealthUser = getComputedStyle(document.querySelector(".health-bar-user"));
  const contextCpu = document.querySelector(".health-bar-cpu").getContext("2d");
  const contextUser = document.querySelector(".health-bar-user").getContext("2d");

  // initialize objects
  const randomImgCpu = new ArrayFunc(meme_pics);
  const randomImgUser = new ArrayFunc(meme_pics);
  const choicesOfPlayer = new ArrayFunc(playArray);
  let roundCount = new RoundCounter(roundcount);
  let healthBarCpu = new HealthBar(visualHealthCpu.width, visualHealthCpu.height, 100, visualHealthCpu.backgroundColor);
  let healthBarUser = new HealthBar(visualHealthUser.width, visualHealthUser.height, 100, visualHealthUser.backgroundColor);

  console.log(healthBarCpu, healthBarUser);

  // Setting images for every img element
  randomImgCpu.setSrc(document.querySelector(".cpu-img"));
  randomImgUser.setSrc(document.querySelector(".user-img"));
  choicesOfPlayer.setImgs(choices);

  // round functionalities
  roundCount.roundUpdate();
  frame = () =>{
    contextUser.clearRect(0,0, healthBarUser.width, healthBarUser.height)
    healthBarUser.show(contextUser);
    requestAnimationFrame(frame)
}
  //  game being started
  let game = new PlayGame(choices);
 
    
game.gameUpdate();
 

