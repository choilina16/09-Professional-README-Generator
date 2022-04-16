function renderLicenseLink(license) {

    licenseLink = '';
    
    if (answers.license == 'MIT') {
      return 'https://opensource.org/licenses/MIT';
    }
    if (answer.license == 'GPL') {
      return 'https://www.gnu.org/licenses/gpl-3.0';
    }
    if (answer.license == 'Apache')
      return 'https://opensource.org/licenses/Apache-2.0';
  }
}

renderLicenseLink ();