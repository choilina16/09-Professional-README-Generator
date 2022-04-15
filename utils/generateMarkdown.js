// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
// const writeFile = (answers) => 

`# ${answers.project} 
[![License: ${answers.license}](https://img.shields.io/github/${answers.license}/choilina16/09-Professional-README-Generator?style=flat-square)]

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
}

// found the images for the badges on this github
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


// objects destructuring ??
// nested objects so to hold the links for the badge and license
// const licenseBadge = {
//   MIT: {
//     link: 'https://opensource.org/licenses/MIT',
//   },
//   GPL: {
//     link: 'https://www.gnu.org/licenses/gpl-3.0',
//   },
//   Apache: {
//     link: 'https://opensource.org/licenses/Apache-2.0',
//   },
// }

// const indexJs = require('../index');
// console.log(licenseBadge);

//   if (answers.license == 'MIT') {
//     // const {badge, license} = licenseBadge.MIT.link;
//     // return 'https://opensource.org/licenses/MIT';
//     return 'https://opensource.org/licenses/MIT';
    
//   } 
//   else if (answers.license == 'GPL') {
//     // const {badge, license} = licenseBadge.GPL.link;
//     // return badge, license;
//     return 'https://www.gnu.org/licenses/gpl-3.0';
//   } 
//   else if (answers.license == 'Apache') {
//     // const {badge, license} = licenseBadge.Apache.link;
//     // return badge, license;
//     return 'https://opensource.org/licenses/Apache-2.0';
//   }
// }


// module.exports = generateMarkdown;