const inquirer = require('inquirer');
const fs = require('fs');
// calling to the generateMarkdown js file 
const generateMarkdown = require('./utils/generateMarkdown');

// Jung said that it's better to push in side an init functions. ORIGINALLY, I had everything in one file but another classmate told me that it needed to be broken up into two files - index.js & generateMarkdown.js. Not sure which way was the best way to approach it.

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
                // put this contribution in a list type so that there was less typing for the user. could easily be changed to input for better customization.
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
            // using .writeFile to actually create the readme.md file from the answers given from user 
            fs.writeFile('README.md', generateMarkdown(answers), (err) =>
            err ? console.log(err) : console.log('README.md was successfully generated. Have fun coding :) !')
            );
        });
}
// calling the function
init();