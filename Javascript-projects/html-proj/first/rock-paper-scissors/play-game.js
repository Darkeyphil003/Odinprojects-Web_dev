class PlayGame {
    constructor() {
        this.elements = document.querySelector(".choices").getElementsByTagName("li");
        this.wincondition = 5;
    }
    
    setUserChoice = () => {
        return new Promise((resolve) => {
            for (let index = 0; index < this.elements.length; index++) {
                this.elements[index].addEventListener("click", () => {
                    resolve(index);
                });
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