const inquirer = require('inquirer');
const fs = require('fs');
// calling to the generateMarkdown js file 
const generateMarkdown = require('./utils/generateMarkdown');

// Jung said that it's better to push in side an init functions
function init () {
    // using inquire .prompt to ask user questions regarding their README.md
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
            // installation: this is probably where i need to tell user to download inquirer to make changes to this...these are notes to me hehe
            {
                type: 'input',
                name: 'installation',
                message: 'Enter the installation instructions',
            },
            // usage: what this code is used for 
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
            // No IdEa WhAt ThIs Is....
            {
                type: 'input',
                name: 'test',
                message: 'Enter the test instructions',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Select the license from the list below',
                choices: ['MIT', 'GPL', 'Apache'],
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
            // const generateMarkdown = writeFile(answers);

            fs.writeFile('README.md', generateMarkdown(answers), (err) =>
            err ? console.log(err) : console.log('README.md was successfully generated. Have fun coding :) !')
            );
        });
}

init();