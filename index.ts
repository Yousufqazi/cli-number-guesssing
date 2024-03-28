#! /usr/bin/env node

import inquirer from "inquirer";


// 1) computer will generat a random number _done

// 2) user input for guessing number _done

// 3) compare user input with computer generated number and show result


const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message:"please guess a number between 1-6:",
        
    }
]);

if(answers.userguessedNumber === randomNumber){
    console.log("Congtratulations ! you guessed  a right number.");
}else {
    console.log("you guessed wrong number");
}