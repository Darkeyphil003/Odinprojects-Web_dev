My logic for this simple calculator
I have an interface:

The operation would be: "+" , "-", "x", "/" for now.
In this interface: We wanna check for the operation inside: the one before the operation such as:
122 + would be the firstExpression and the one after: + 255 would be the secondExpression, we would add a check to in the end of the secondExpression to see if there would be anymore input such as another operation which would trigger an invalid expression for now.

We can use the slice method to seperate the first expression and the second expression when the any operator is called this 

when a button number is clicked it is added to the value of the form interface is updated

When the clear button is clicked it clears the interface
When the delete button is clicked it takes the interface.value += interface.value.toString().slice(0,-1) 


//TODO:

add a functionality that when the "." operator
add a tracker for the current index of the operator and assign the previousstatements as a variable same as the afterstatements
add the functionality of equals button this would be done the last


How would the "." operator would move