function calculate() {
    let number1 = Number(document.getElementById("number1").value);
     let number2 = Number(document.getElementById("number2").value);
    let operator = document.getElementById("operator").value;
    let answer;
    //use if...else if to perform the calculation
    if(operator === "+") {
        answer = number1 + number2;
    } else if(operator === "-") {
        answer = number1 - number2;
    } else if(operator === "*") {
        answer = number1 * number2;
    } else if(operator === "/") {if (number2 === 0) {
        answer = "cannot divide by zero";
    }
        answer = number1 / number2;
    }
    //display the result 
    document.getElementById("result").innerText = "Result: " + answer;
}