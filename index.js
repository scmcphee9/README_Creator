// define variables that require dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE2.0", "BSD3", "GPLv3", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usingRepo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributingRepo",
  },
];

// function to write README file
function writeToFile(data) {
  // creates a file called README.md from the generateMarkdown function
  return fs.writeFile("README.md", generateMarkdown(data), () =>
    console.log("Success!")
  );
}

// function to initialize program
function init() {
  // inquirer prompts the questions then saves the responses as data and returns them in a promise.

  inquirer.prompt(questions).then((data) => {
    // this data is then run in the writeToFile function
    return writeToFile(data);
  });
}

// function call to initialize program
init();
