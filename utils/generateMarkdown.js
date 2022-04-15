https://gist.github.com/qvil/5e3ed56c26d784e51424621119cc4028

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// MIT license badge
function renderLicenseBadge(license) {}
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// GNU GPL license badge
function renderLicenseLink(license) {}
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// Apache license badge
function renderLicenseSection(license) {}
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
