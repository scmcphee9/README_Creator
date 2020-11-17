const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },

  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is your project description?",
    name: "description",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const fileName = `${data.title.toLowerCase()}.md`;
  fs.writeFile(fileName, generateMarkdown(data), () => console.log(success));
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    return writeToFile(fileName, data);
  });
}

// function call to initialize program
init();
