
/*import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {message: "Enter your First Number", type: "number", name: "firstNumber"},
    {message: "Enter your Second Number", type: " number", name: "secondNumber"},
    {
         message: " Select one operator to perform operations",
         type: "list",
         name: "operator",
         choices: ["ADDITION","Subtraction","Multiplication","Division"],
    }
    
]);
console.log(answer); 

if(answer.operator === "Addition")
{
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction")
{
    console.log(answer.firstNumber - answer.secondNumber); 
}else if (answer.operator === "Multiplication")
{ 
    console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division")
{
    console.log(answer.firstNumber / answer.secondNumber);
}else{
    console.log('Please select valid calculator');
}

*/

import inquirer from "inquirer"


import chalk from "chalk";

//Calculator Operator

enum Operator
{
    ADD = "Addition",
    SUBTRACT = " Subtraction", 
    MULTIPLY = "Multiplication", 
    DIVIDE = "Division"
}
const prompt = inquirer.createPromptModule();
function validateNumber(input: string): boolean | string
{if (isNaN(parseFloat(input)))
    {
        return "please enter a valid number"
    }
    return true;
}
async function  main()
{
const input = await prompt([
    {
    type: "input",
    name: "num1",
    message: "Please enter the first number:",
    validate: validateNumber,
},
{
    type: "input",
    name: "operator",
    message: "Select an operator:",
    choices: Object.values(Operator)
},
{
    type: "input",
    name: "num2",
    message: "Please enter the second number:",
    validate: validateNumber,
}

])
console.log(input);
const num1 = parseFloat(input.num1);
const num2 = parseFloat(input.num2);
let result: number;
const selectedOperator = input.operator as Operator;


if ( selectedOperator === Operator.ADD)
{
     console.log(num1 + num2);
    //result = num1 + num2;
    //console.log(chalk.blue.bgBlueBright(`Result is: ${result}`));
}
else if (selectedOperator === Operator.SUBTRACT)
{
    console.log(num1 - num2);   
    //result = num1 - num2;
    //console.log(chalk.green.bgRedBright(`Result is: ${result}`));
} else if (selectedOperator === Operator.MULTIPLY)
{
    console.log(num1 * num2);
    // result = num1 * num2;
    //console.log(chalk.blue.bgYellowBright(`Result is: ${result}`));
}
else if (selectedOperator === Operator.DIVIDE)
{  console.log(num1 / num2);

    //result = num1 / num2;
    
      //console.log(chalk.yellow.bgBlueBright(`Result is: ${result}`));
}
  else
 {
    console.log('Invalid Number');
 }
}
main()

