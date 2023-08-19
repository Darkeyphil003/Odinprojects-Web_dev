class Calculator{
  constructor(display) {
   this.display = display;
   this.previousExpression =""
   this.nextExpression = ""
   this.operator = "";
 
  }
  clear(){
     this.display.value = ""
  }
  delete(){
    this.display.value = this.display.value.slice(0,-1);
  }
  checkDuplicate(operator){
    const currentIndex = this.display.value.indexOf(operator);
    const previousIndex = this.display.value.indexOf(operator, currentIndex-1);
    const nextIndex = this.display.value.indexOf(operator, currentIndex+1);
    // Edge case for when the user go for the operator first without any number
    const checkForEmptyString = ()=>{
      if(this.display.value === "")return true;
      else return false
      
    }
    // Throw @Error if it is empty
    if(checkForEmptyString()) throw new Error(`String is empty. Invalid for ${operator}`);
    
    // Checking for the immediate left and right of the currentIndex of the operator
    if (this.display.value[previousIndex] === operator ||
      (this.display.value.length && this.display.value[nextIndex] === operator)) {
    console.error(`Invalid use of ${operator}`);
  } else {
    // Only add the operator if there are no duplicates
    this.display.value += operator;
  }
    
  }
  
    selectOperator(operator){
      this.operator = operator;
    const currentIndex = this.display.value.indexOf(operator);
    this.previousExpression = this.display.value.slice(0, currentIndex);
    this.nextExpression = this.display.value.slice(currentIndex + 1);
      
    }
    compute(){
      let computation;
      const prev = parseFloat(this.previousExpression);
      const next = parseFloat(this.nextExpression);
      if(isNaN(prev)|| isNaN(next)) throw new Error("Invalid Expression!")
      switch (this.operator) {
        case "+":
          computation = prev + next
          break;
          case  "x":
          computation = prev * next
          break;
          case  "/":
          computation = prev / next
          break;
          case  "-":
          computation = prev - next
          break;
      
        default:
          break;
      
      }
      this.display.value = computation.toString();
      return computation
    } 
  }

 const operators = {
  "+":() => {
    const operator = Object.keys(operators)[0];
    Calc.selectOperator(operator);
    try{
      Calc.checkDuplicate(operator);
    }
    catch(error){
      console.error(error);
    }
    
  }, 
  "/": ()=>{
    const operator = Object.keys(operators)[1];
    Calc.selectOperator(operator);
    try{
      Calc.checkDuplicate(operator);
    }
    catch(error){
      console.error(error);
    }
  }, 
  "x":()=>{
    const operator = Object.keys(operators)[2];
    Calc.selectOperator(operator);
    try{
      Calc.checkDuplicate(operator);
    }
    catch(error){
      console.error(error);
    }
  },
   "-":()=>{
    const operator = Object.keys(operators)[3];
    Calc.selectOperator(operator);
    try{
      Calc.checkDuplicate(operator);
    }
    catch(error){
      console.error(error);
    }
  },
   ".":()=>{
    const operator = Object.keys(operators)[4];
    Calc.selectOperator(operator);
    try{
      Calc.checkDuplicate(operator);
    }
    catch(error){
      console.error(error);
    }
  },
  "=":()=>{
    // when the equals button is clicked
    try {
      
      Calc.clear();
      Calc.display.value = Calc.compute();
    } catch (error) {
      console.error(error);
    }
  }
 }

const buttons = document.querySelectorAll(".button-container [type = button]");
const display = document.querySelector(".display-block");
const clearButton = document.querySelector(".forms [value = C]");
const deleteButton = document.querySelector(".forms [value = delete]");
// creating a calculator object

const Calc = new Calculator(display);

// Adding event listener to every button
buttons.forEach(button => {
  button.addEventListener("click", () =>{
   
   if (operators.hasOwnProperty(button.value)) {
    operators[button.value]();
   }
   else Calc.display.value += button.value
    
  })
});

clearButton.addEventListener("click", ()=>{
  Calc.clear()
})
deleteButton.addEventListener("click", ()=>{
  Calc.delete()
})