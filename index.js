// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use of the project. Include screenshots as needed:",
        name: "usage"
    },
    {
        type: "input",
        message: "List your collaborators, if any, with links to their GitHub profiles:",
        name: "collaborators"
    },
    {
        type: "checkbox",
        message: "Select a license for your project:",
        name: "license",
        choices: ['Apache license 2.0', 'Microsoft Public License', 'MIT', 'Mozilla Public License 2.0']
    },
    {
        type: "input",
        message: "Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/):",
        name: "badges"
    },
    {
        type: "input",
        message: "If your project has a lot of features, list them here:",
        name: "features"
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('README file created successfully'))
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        console.error("An error occurred during initialization:", error);
    });
}

// Function call to initialize app
init();
