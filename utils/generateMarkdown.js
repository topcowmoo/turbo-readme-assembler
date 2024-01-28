const fs = require("fs");
const inquirer = require("inquirer");

// Function to render the license badge
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  const lowerCaseLicense = String(license).toLowerCase();

  switch (lowerCaseLicense) {
    case "apache license 2.0":
      return "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "microsoft public license":
      return "[![License: MS-PL](https://img.shields.io/badge/License-MS--PL-green.svg)](https://opensource.org/licenses/MS-PL)";
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "mozilla public license 2.0":
      return "[![License: MPL-2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

// Function to render the license link
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }

  const lowerCaseLicense = String(license).toLowerCase();

  switch (lowerCaseLicense) {
    case "apache license 2.0":
      return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "microsoft public license":
      return "[Microsoft Public License](https://opensource.org/licenses/MS-PL)";
    case "mit":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "mozilla public license 2.0":
      return "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
    default:
      return "";
  }
}

// Function to render the license section
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  const lowerCaseLicense = String(license).toLowerCase();

  switch (lowerCaseLicense) {
    case "apache license 2.0":
      return `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
`;
    case "microsoft public license":
      return `
## License

This project is licensed under the [Microsoft Public License](https://opensource.org/licenses/MS-PL).
`;
    case "mit":
      return `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`;
    case "mozilla public license 2.0":
      return `
## License

This project is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0).
`;
    default:
      return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  
${licenseBadge}

## Description
${data.motivation}
${data.build}
${data.problem}
${data.learn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.test}
    
## Questions
    
If you have any questions about this project, please contact me directly at ${data.email}. My GitHub profile can be found at https://github.com/${data.github}.

---
`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;
