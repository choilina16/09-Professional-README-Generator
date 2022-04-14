// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'project',
            message: 'Enter the title',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description',
        },
        // this is probably where i need to tell user to download inquirer to make changes to this 
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instructions',
        },
        // what is this code used for
        {
            type: 'input',
            name: 'usage',
            message: 'Enter the usage information',
        },
        {
            type: 'list',
            name: 'contribution',
            message: 'Select the contribution guidelines from the list below',
            choices: ['Pull requests are welcome! Make it your own', 'Pull requests are welcome. Please reach out before making major changes', 'Please reach out before making a change']
        },
        // no idea what this is for either lol
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the license from the list below',
            choices: ['MIT', 'GNU GPL', 'Apache'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your Github Username',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
        },
    ])
    .then((answers) => {
        const readMeContent = writeFile(answers);

        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('README.md was successfully created. Have fun coding :) !')
        );
    });


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const writeFile = (answers) => 
`# ${answers.project} 

## Description
${answers.description}

## Table of Contents
1. [Installation Instructions](#installation-instructions)
2. [Usage Information](#usage-information)
3. [Contribution Guidelines](#contribution-guidelines)
4. [Test Instructions](#test-instructions)
5. [License](#license)
6. [Questions](#questions)

## Installation Instructions
${answers.installation}

## Usage Information 
${answers.usage}

## Contribution Guidelines 
${answers.contribution}

## Test Instructions 
${answers.test}

## License 
${answers.license}

## Questions
    Q: Where can I email the developer? 
    A: Please email me at ${answers.email}.

    Q: Where can I find more respoistories from this developer?
    A: Please check out my other repositories at ${answers.github}

`;

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
