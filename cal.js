"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//Calculator Operator
var Operator;
(function (Operator) {
    Operator["ADD"] = "Addition";
    Operator["SUBTRACT"] = " Subtraction";
    Operator["MULTIPLY"] = "Multiplication";
    Operator["DIVIDE"] = "Division";
})(Operator || (Operator = {}));
const prompt = inquirer_1.default.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "please enter a valid number";
    }
    return true;
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const input = yield prompt([
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
        ]);
        console.log(input);
        const num1 = parseFloat(input.num1);
        const num2 = parseFloat(input.num2);
        let result;
        const selectedOperator = input.operator;
        if (selectedOperator === Operator.ADD) {
            console.log(num1 + num2);
            //result = num1 + num2;
            //console.log(chalk.blue.bgBlueBright(`Result is: ${result}`));
        }
        else if (selectedOperator === Operator.SUBTRACT) {
            console.log(num1 - num2);
            //result = num1 - num2;
            //console.log(chalk.green.bgRedBright(`Result is: ${result}`));
        }
        else if (selectedOperator === Operator.MULTIPLY) {
            console.log(num1 * num2);
            // result = num1 * num2;
            //console.log(chalk.blue.bgYellowBright(`Result is: ${result}`));
        }
        else if (selectedOperator === Operator.DIVIDE) {
            console.log(num1 / num2);
            //result = num1 / num2;
            //console.log(chalk.yellow.bgBlueBright(`Result is: ${result}`));
        }
        else {
            console.log('Invalid Number');
        }
    });
}
main();
