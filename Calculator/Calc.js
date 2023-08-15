// intializing Dom Elements
const buttonContainer = document.querySelector(".button-container").getElementsByTagName("button")
const display = document.querySelector(".display-block")
const clearButton = document.querySelector("#button-clear")

// getting All the button elements
    Array.from(buttonContainer)
function Calculator() {
    // clearing the screen
    clearButton.addEventListener("click" ,() =>{
        display.value = "";
    })
    // event listener for every button 
   for (let index = 0; index < buttonContainer.length; index++) {
    buttonContainer[index].addEventListener("click" , () =>{
       switch (buttonContainer[index].id) {
        case "button-1":
            display.value+=1
            break; 
        case "button-2":
            display.value+=2
            break;
        case "button-3":
            display.value+=3
            break;
        case "button-4":
            display.value+=4
            break;
        case "button-5":
            display.value+=5
            break;
        case "button-6":
            display.value+=6
            break;
        case "button-7":
            display.value+=7
            break;
        case "button-8":
            display.value+=1
            break;
        case "button-9":
            display.value+=9
            break;
        case "button-0":
            display.value+=0
            break;
        case "button-+":
            display.value 
            break;
        case "button--":
            display.value+=1
            break;
        case "button-x":
            display.value+=1
            break;
        case "button-/":
            display.value+=1
            break;
        // need to make a rule to only put it besides whole numbers
        // and it cannot be used for more than one times
        // Button for making a whole number into a decimal numbers 
        case "button-.":
            display.value+=1
            break;
        // Evaluating the value of the displayed numbers 
        case "button-=":
            display.value+=1
            break;
       
        default:
            break;
       }
    })
    
   }
}
Calculator();   