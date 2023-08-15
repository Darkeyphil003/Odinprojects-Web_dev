class RoundCounter{
    constructor(roundcount){
        this.roundcount = roundcount;
        this.round = 0;
        
    }
    
    roundUpdate(){
        this.round++;
        this.roundcount.textContent = this.round;
    }
}