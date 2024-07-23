// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license !== 'None') {
return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
}
return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== 'None') {
switch (license) {
case 'MIT':
return 'https://opensource.org/licenses/MIT';
case '0BSD':
return 'https://opensource.org/licenses/0BSD';
}
}
return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== 'None') {
return `This project is licensed under the ${renderLicenseLink(license)} license.`;
}
return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}
  
## Usage
${data.usage}

 ## License
${renderLicenseSection(data.license)}

  
## Contributing
${data.contributing}
  
## Tests
${data.tests}

## Questions
My GitHub username is ${data.username} you can find more examples of my work at https://github.com/Chamberbankes?tab=repositories.

If you have any further questions please feel free to contact me at ${data.email}
`;
}

module.exports = generateMarkdown;
