    class PlayGame {
        constructor(array){
    //   super(array,height, width, maxheatlh, color);
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
            else if(userchoice === 0 && cpuchoice === 1 ||      
               userchoice === 1 && cpuchoice === 2 ||
               userchoice === 2 && cpuchoice === 0 )
               {
                // user wins the round
                roundCount.roundUpdate();
                this.userscore++;
                
                frame();
                
               }
            else {
                roundCount.roundUpdate();
                healthBarUser.health-=20;
                healthBarUser.updateHealth(healthBarUser.health);
                console.log(healthBarUser.health);
                this.cpuscore++;
            }
            if(this.userscore <= this.wincondition && this.cpuscore <= this.wincondition ){
                let state1 =  this.userscore === this.wincondition
                let state2  = this.cpuscore === this.wincondition
                        if( state1|| state2){ 
                          if(state1){
                            
                            alert(`${user.textContent} has won!`)
                            location.reload()
                          }
                           if (state2){
                            alert(`${cpu.textContent} has won!`)
                            location.reload()
                          }
                            return;
                        }
                console.log(`${userchoice} ${cpuchoice} ${this.userscore} ${this.cpuscore}`);
                this.gameUpdate();
            }

        }
        
        
    }