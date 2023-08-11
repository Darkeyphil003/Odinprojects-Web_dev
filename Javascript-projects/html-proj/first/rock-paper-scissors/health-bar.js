 class HealthBar {
    constructor(width, height, maxhealth,  color){
    this.userchoice = userchoice;
    this.cpuchoice = cpuchoice;
    this.width = width;
    this.health = maxhealth;
    this.maxhealth = maxhealth;
    this.height = height;
    this.color = color;
    this.maxwidth = width
    this.x = 0;
    this.y = 0;
   }
   
   show = (context) => 
        {
                context.lineWidth = 3;
                context.strokeStyle = "#333";
                context.fillStyle = this.color;
                context.fillRect(this.x, this.y,this.width,this.height)
                context.strokeRect(this.x, this.y, this.width, this.height)
        }

        updateHealth = (val) => {
            this.health = val;
            this.width = (this.health/ this.maxhealth) * this.maxwidth;
        }
    }

   