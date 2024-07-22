// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
type: 'input',
name: 'title',
message: 'What is the title of your project?'
},
{
type: 'input',
name: 'description',
message: 'Write a short description of your project:'
},

{
type: 'input',
name: 'installation',
message: 'What are the steps required to install your project?:'
},

{
type: 'input',
name: 'usage',
message: 'Provide instructions and examples for use.:'
},

{
type: 'list',
name: 'license',
message: 'Choose a license for your project:',
choices: ['MIT', '0BSD', 'None']
},

{
type: 'input',
name: 'contributing',
message: 'How can others contribute to this project?:'
},

{
type: 'input',
name: 'tests',
message: 'add information on how to test the project:'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README has been created')
);
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((data) => {
  const markdown = generateMarkdown(data);
  writeToFile('README.md', markdown);
});
}

// Function call to initialize app
init();
