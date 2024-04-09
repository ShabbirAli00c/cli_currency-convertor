#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any ={
    USD: 1,  //Base Currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.24,
    PKR: 277,
    JOD: 0.71,
    BHD: 0.38
};

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: "Enter from yuor Currency",
            type: "list",
            choices: ['USD', 'EUR', 'JOD', 'BHD', 'GBP', 'INR', 'PKR']
        },
        {
            name: "to",
            message: "Enter to yuor Currency",
            type: "list",
            choices: ['USD', 'EUR', 'JOD', 'BHD', 'GBP', 'INR', 'PKR']
        },
        {
            name: "amount",
            message: "Enter your Amount",
            type: "number",
        }
    ]
)

let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount
let baseAmont = amount / fromAmount;
let convertedAmount = baseAmont * toAmount;
console.log(Math.round(convertedAmount));



