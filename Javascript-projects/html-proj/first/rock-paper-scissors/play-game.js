    class PlayGame{
        constructor(array){
        this.elements = array
        this.wincondition =5;
        this.userscore = 0;
        this.cpuscore = 0;
        }
        
        userChoice = () =>{
            return new Promise((resolve) =>{
                for(let index = 0; index< this.elements.length; index++){
                    this.elements[index].addEventListener("click" ,() =>{
                      resolve(index);
                    })
                     
                }
            })
        }

        cpuChoice = async() =>{
            return new Promise ((resolve) =>{
                for(let index = 0; index< this.elements.length; index++){
                    let randomIndex = Math.floor(Math.random() * this.elements.length)
                    resolve(randomIndex);
                }
            })
        }
        

        
    
        gameUpdate = async() =>{
            let userchoice = await this.userChoice();
            let cpuchoice = await this.cpuChoice();
            if(userchoice === cpuchoice){
                roundCount.roundUpdate();
                
            }
        });
    }

    setCpuChoice = async () => {
        return new Promise((resolve) => {
            for (let index = 0; index < this.elements.length; index++) {
                let randomIndex = Math.floor(Math.random() * this.elements.length);
                resolve(randomIndex);
            }
        });
    }
    
    choiceEvaluate = async () => {
        let userchoice = await this.setUserChoice();
        let cpuchoice = await this.setCpuChoice();
        console.log(`${userchoice} ${cpuchoice}`);
    }
}