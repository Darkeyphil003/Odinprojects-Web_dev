class Calculator{
  constructor(display) {
   this.display = display;
  }
  clear(){
     this.display.value = ""
  }
  delete(){
    this.display.value = this.display.value.slice(0,-1);
  }
  
  selectOperator(operator){
    const currentIndex = this.display.value.indexOf(operator);
    this.previousExpression = this.display.value.slice(0,currentIndex);
    this.nextExpression = this.display.value.slice(currentIndex);

  }
 }

 const operators = {
  "+":() => {
    if(Calc.display.value.includes(Object.keys(operators)[0])) return;
    else Calc.display.value += Object.keys(operators)[0]
    
  }, 
  "/": ()=>{
    if(Calc.display.value.includes(Object.keys(operators)[1])) return;
    else Calc.display.value += Object.keys(operators)[1]
  }, 
  "x":()=>{
    if(Calc.display.value.includes(Object.keys(operators)[2])) return;
    else Calc.display.value += Object.keys(operators)[2]
  },
   "-":()=>{
    if(Calc.display.value.includes(Object.keys(operators)[3])) return;
    else Calc.display.value += Object.keys(operators)[3]
  },
   ".":()=>{
    if(Calc.display.value.includes(Object.keys(operators)[4])) return;
    else Calc.display.value += Object.keys(operators)[4]
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