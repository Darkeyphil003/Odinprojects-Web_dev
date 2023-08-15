class ArrayFunc{
    constructor(array){
        this.array = array
    }
    imgRandom=()=>{
    for(let i = 0; i< this.array.length; i++) {
      const index  = Math.floor(Math.random()* this.array.length);;
      return this.array[index]}
    }
    setSrc = (document) =>{
       document.src = this.imgRandom();
    }

    setImgs = (sampleArray)=>{  
        for(let i =0; i<sampleArray.length && i< this.array.length; i++ ){
                sampleArray[i].querySelector("img").src = this.array[i]
        }
    }
   
}