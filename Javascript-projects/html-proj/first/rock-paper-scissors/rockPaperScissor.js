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
// initialize objects
const randomImgCpu = new ArrayFunc(meme_pics);
const randomImgUser = new ArrayFunc(meme_pics);
const choicesOfPlayer = new ArrayFunc(playArray);

let choices = document.querySelector(".choices").getElementsByTagName("li");
randomImgCpu.setSrc(document.querySelector(".cpu-img"));
randomImgUser.setSrc(document.querySelector(".user-img"));
choicesOfPlayer.equalArray(choices);

