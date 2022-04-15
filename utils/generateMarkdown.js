// found the images for the badges on this github
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


// nested objects so to hold the links for the badge and license
const licenseBadge = {
  MIT: {
    link: {
      badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
      license: 'https://opensource.org/licenses/MIT',
    }
  },
  GPL: {
    link: {
      badge: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
      license: 'https://www.gnu.org/licenses/gpl-3.0',
    }
  },
  Apache: {
    link: {
      badge: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
      license: 'https://opensource.org/licenses/Apache-2.0',
    }
  },
}

const indexJs = require('../index');
console.log(licenseBadge);



// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   renderLicenseBadge();

//   return `# ${data.title}
// `;
// }

function generateMarkdown(license) {
  // renderLicenseBadge();
  if (license == 'MIT') {
    // const {badge, license} = licenseBadge.MIT.link;
    return licenseBadge.MIT.link;
  } 
  if (license == 'GPL') {
    // const {badge, license} = licenseBadge.GPL.link;
    return licenseBadge.GPL.link;
  } 
  if (license == 'Apache') {
    // const {badge, license} = licenseBadge.Apache.link;
    return licenseBadge.Apache.link;
  }
}

//   return `# ${data.title}
// `;

module.exports = generateMarkdown;