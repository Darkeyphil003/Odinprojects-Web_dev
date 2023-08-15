 class HealthBar {
    constructor(width, height, maxhealth,  color){
 
    this.width = width;
    this.health = maxhealth;
    this.maxhealth = maxhealth;
    this.height = height;
    this.color = color;
    this.maxwidth = width
  
   }
   
   show = (context) => 
        {
                context.lineWidth = 3;
                context.strokeStyle = "#333";
                context.fillStyle = this.color;
                context.fillRect(0, 0,this.width,this.height)
        }

        updateHealth = (val) => {
            this.health = val;
            this.width = (this.health/ this.maxhealth) * this.maxwidth;
        }
    }

   