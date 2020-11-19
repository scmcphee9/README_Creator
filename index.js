const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// const util = require("util");

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
    choices: ["MIT", "APACHE 2.0", "BSD 3", "GLP 3.0", "None"],
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "dependencies",
  },
  {
    type: "input",
    message: "What command should be run to run tests",
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
  // const fileName = `${data.title.toLowerCase()}.md`;
  fs.writeFile("README.md", generateMarkdown(data), () => console.log(success));
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    return writeToFile(fileName, data);
  });
}

// function call to initialize program
init();
