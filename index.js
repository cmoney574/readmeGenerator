// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ["Title: ", "Description: ", "Table of Contents: ", "Installation: ", 
"Usage: ", "Liscence: ", "Contribution guidelines: ", "Tests: ", "Contact info:"];

// TODO: Create a function to write README file
const writeToFile = ({ title, description, toc, install, usage, liscence, contribute, test, questions }) =>
    `# ${title}

## Description: 
${description}

## Table of Contents: 
${toc}

## Installation: 
\`\`\`md 
${install}
\`\`\`
## Usage: 
\`\`\`md 
${usage}
\`\`\`
## liscence: 
${liscence}
## Contribution guidelines: 
\`\`\`md 
${contribute}
\`\`\`
## Test: 
${test}
## Contact info: 
[${questions}](https://${questions})
    `;


// TODO: Create a function to initialize app
function init() {
    
inquirer
.prompt([
  {
      type: 'input',
      name: 'title',
      message: questions[0],
  },
  {
      type: 'input',
      name: 'description',
      message: questions[1],
  },
  {
      type: 'input',
      name: 'toc',
      message: questions[2],
  },
  {
      type: 'input',
      name: 'install',
      message: questions[3],
  },
  {
      type: 'input',
      name: 'usage',
      message: questions[4],
  },
  {
      type: 'input',
      name: 'liscence',
      message: questions[5],
  },
  {
      type: 'input',
      name: 'contribute',
      message: questions[6],
  },
  {
      type: 'input',
      name: 'test',
      message: questions[7],
  },
  {
      type: 'input',
      name: 'questions',
      message: questions[8],
  },
])
.then((answers) => {
  const htmlPageContent = writeToFile(answers);
  fs.writeFile('newreadme.md', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme')
  );
});
}

// Function call to initialize app
init();
