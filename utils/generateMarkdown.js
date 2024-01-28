const fs = require('fs');
const inquirer = require('inquirer');

// ... (Your existing code for renderLicenseBadge, renderLicenseLink, renderLicenseSection)

// Create a function to generate markdown for README
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

## License
${licenseSection}

## Contributing
${data.contributing}

## Tests
${data.test}
    
## Questions
    
If you have any questions about this projects, please contact me directly at ${data.email}. My GitHub profile can be found at https://github.com/${data.github}.

---
`;
}

// ... (Your existing code)

// Create a function to write README file
function writeToFile(data) {
    const folderPath = 'sample';  // specify the folder name
    const fileName = 'README-sample.md';
    const filePath = `${folderPath}/${fileName}`;

    // Check if the folder exists, create it if not
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README file created successfully at ${filePath}`);
        }
    });
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile(readmeContent);
    })
    .catch((error) => {
        console.error("An error occurred during initialization:", error);
    });
}

// Function call to initialize app
init();
