// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Create an array of questions for user input
const questions = [{
        type: "input",
        message: "What is the title of your README project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the motivation of this project?",
        name: "motivation"
    },
    {   
        type: "input",
        message: "Why did you build this project?",
        name: "build"
    },
    {
        type: "input",
        message: "What problem does it solve or help with?",
        name: "problem"
    },
    {
        type: "input",
        message: "What did you learn building this project?",
        name: "learn"
    },
    {
        type: "input",
        message: "What are the steps required to install your project?:",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use of the project:",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Select a license for your project:",
        name: "license",
        choices: ['Apache license 2.0', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0']
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles:",
        name: "contributing"
    },
    {
        type: "input",
        message: "Please enter your github username:",
        name: "github"
    },
    {
        type: "input",
        message: "Please enter your email address:",
        name: "email"
    },
    {
        type: "input",
        message: "What command should be run for tests>",
        name: "test"
    }
];

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
