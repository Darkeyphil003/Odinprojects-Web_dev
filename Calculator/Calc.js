// intializing Dom Elements
const buttonContainer = document.querySelectorAll(".button-container [type = button]")
const display = document.querySelector(".display-block")
const clearButton = document.querySelector("#button-clear")

const operators = {
  "+": () =>{
    const valueOperator = display.value.indexOf("+")
    if(valueOperator!== -1){
      const beforeOperator = display.value.split(0,valueOperator);
      const afterOperator = display.value.split(valueOperator + 1);
      if (display.value.includes(`+`)) {
        console.error("+ already exists");
      }
      else if(beforeOperator === '' || afterOperator === ''){
        console.error("invalid expression");
      }
      else {
        display.value+=`+`
      }
    }
    else {
      display.value+=`+`
    }
  } ,"-": () =>{
    const valueOperator = display.value.indexOf("-")
    if(valueOperator!== -1){
      const beforeOperator = display.value.split(0,valueOperator);
      const afterOperator = display.value.split(valueOperator + 1);
      if (display.value.includes(`+`)) {
        console.error("- already exists");
      }
      else if(beforeOperator === '' || afterOperator === ''){
        console.error("invalid expression");
      }
      else {
        display.value+=`-`
      }
    }
    else {
      display.value+=`-`
    }
  } ,"x": () =>{
    const valueOperator = display.value.indexOf("x")
    if(valueOperator!== -1){
      const beforeOperator = display.value.split(0,valueOperator);
      const afterOperator = display.value.split(valueOperator + 1);
      if (display.value.includes(`x`)) {
        console.error("x already exists");
      }
      else if(beforeOperator === '' || afterOperator === ''){
        console.error("invalid expression");
      }
      else {
        display.value+=`x`
      }
    }
    else {
      display.value+=`x`
    }
  } ,"/": () =>{
    const valueOperator = display.value.indexOf("/")
    if(valueOperator!== -1){
      const beforeOperator = display.value.split(0,valueOperator);
      const afterOperator = display.value.split(valueOperator + 1);
      if (display.value.includes(`/`)) {
        console.error("/ already exists");
      }
      else if(beforeOperator === '' || afterOperator === ''){
        console.error("invalid expression");
      }
      else {
        display.value+=`/`
      }
    }
    else {
      display.value+= '/'
    }
  }
  , ".": () =>{
    //  checks for the button . 
    // @value would be a floating point 
        const currentDisplay = display.value
        const dotOperator = display.value.indexOf(".")
        const beforeOperator = display.value.split(0,dotOperator);
        const afterOperator = display.value.split(dotOperator + 1);
        
      
        if(currentDisplay === "" || operators.hasOwnProperty(currentDisplay[currentDisplay.length-1])){
          if(currentDisplay.includes("0.")){
            console.error("There is already a 0.");
          }
          else {
          display.value += "0."
          }

        }
   
          
        
       
    
  }
}

// getting All the button elements
function Calculator() {
    // clearing the screen
    clearButton.addEventListener("click" ,() =>{
        display.value = "";
    })
    display.addEventListener("mouseenter", () =>{
      display.setAttribute("placeholder" , "")
    })
    display.addEventListener("mouseleave", () =>{
      display.setAttribute("placeholder" , "0")
    })
    // event listener for every button 
   for (let index = 0; index < buttonContainer.length; index++) {
    // @param buttoncontainer[index] is the specific button inside the buttonContainer
    buttonContainer[index].addEventListener("click" , () =>{
      
        
   
      if (buttonContainer[index].value === "=") {
        
      } 
     
      else if(operators.hasOwnProperty(buttonContainer[index].value)){
          operators[buttonContainer[index].value]()
      }

      else {
        display.value+=buttonContainer[index].value
      }
      
       
    })
    
   }
}
Calculator();   