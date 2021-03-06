// this function creates a badge, and if there is no badge, no badge is created
function licenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// this function creates table of contents link if there is a license
function licenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`;
  }
  return "";
}

// this function creates the license section if there is a license
function licenseSection(license) {
  if (license !== "None") {
    return `## License
This project requires the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${licenseBadge(data.license)}

## Project Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
${licenseLink(data.license)}
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.dependencies}

## Usage

${data.usingRepo}

## Contributing

${data.contributingRepo}

${licenseSection(data.license)}

## Tests

${data.tests}

## Questions?

Contact me by GitHub or Email:
- GitHub username: [${data.username}](https://github.com/${data.username})
- Email Address: ${data.email}
`;
}

module.exports = generateMarkdown;
