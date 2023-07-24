   let readData = (inputOfUserData) => {
    let answer = "";
    for (let i = 1; i <= inputOfUserData; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            answer += "FizzBuzz ";
        } else if (i % 3 === 0) {
            answer += "Fizz ";
        } else if (i % 5 === 0) {
            answer += "Buzz ";
        } else {
            answer += i + " ";
        }
    }
    return answer.trim();
    };
   

    const evaluateButton = () =>{
        const inputOfUser = document.querySelector("#inputOfUser");
        const input = parseInt(inputOfUser.textContent);
        
        const outputOfUser = readData(input);
        const output = document.querySelector("#output");
        output.textContent = outputOfUser;
    }
    const buttonEval = document.querySelector(".evaluate");
    buttonEval.addEventListener("click", evaluateButton);

