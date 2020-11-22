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
  // const fileName = `${data.title.toLowerCase()}.md`;
  return fs.writeFile("README.md", generateMarkdown(data), () =>
    console.log("Success!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    // switch (data.license) {
    //   case "MIT":
    //     licenseImage =
    //       "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    //     break;
    //   case "APACHE 2.0":
    //     licenseImage =
    //       "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    //     break;
    //   case "BSD 3":
    //     licenseImage =
    //       "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    //     break;
    //   case "GPL v3":
    //     licenseImage =
    //       "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    //     break;
    //   case "None":
    //     licenseImage =
    "![License: MIT](https://img.shields.io/badge/No%License-None-blue.svg)";
    //     break;

    //   default:
    //     "None";
    //     break;
    // }

    //img.shields.io/badge/dynamic/json?url=<URL>&label=<LABEL>&query=<$.DATA.SUBDATA>&color=<COLOR>&prefix=<PREFIX>&suffix=<SUFFIX>

    https: return writeToFile(data);
  });
}

// function call to initialize program
init();
