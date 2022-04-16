// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // calling the function to render the license link. putting it inside a variable so I can call it inside the temperate literal
  // parameters needs to be answers.license...when I left it blank it was giving me undef
  const renderBadge = renderLicenseLink (answers.license);
// totally forgot to the RETURN in there and BCS-Mia helped me out so much :) 
// returns the actual content for the .writeFile README.md
// another BSC-Val help! showed me how to put a function inside the temperate literal 
return `# ${answers.project} 

${renderBadge} 

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

// function to render the license link inside the badge
// got the links for the badges here -> https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function renderLicenseLink(license) {
  
  // if statement so that I can return the correct link based on the user input
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license == 'GPL') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
}

// exports the info from this file to the index.js file
module.exports = generateMarkdown;