let inquirer = require("inquirer");
let fs = require("fs");
// Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Project Title: ',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Description: ',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Installation',
            name: 'install'
        },
        {
            type: 'input',
            message: 'Usage: ',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'License: ',
            name: 'license',
            choices: ['MIT', 'Apache 2.0']
        },
        {
            type: 'input',
            message: 'Contributions: ',
            name: 'contributions'
        },
        {
            type: 'input',
            message: 'Tests: ',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'FAQs: ',
            name: 'faqs'
        }
    ])
    .then((response) => {
        console.log(response)
        fs.writeFile('README.md',
        `# ${response.title}
        ## Description 
        ${response.description}
        ## Installation
        ${response.install}
        ## Usage
        ${response.usage}
        ## License
        ${response.license}
        ## Contributions
        ${response.contributions}
        ## Tests
        ${response.tests}
        ### Frequently Asked Questions
        ${response.faqs}`,
        info =>
        console.log('README creation successful')
        )
    });