let inquirer = require("inquirer");
let fs = require("fs");
let licenseInfo = require("./license-info");
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
            type: 'input',
            message: 'Contributing: ',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Tests: ',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Questions:',
            name: 'questions'
        },
        {
            type: 'input',
            message: 'Github/ ',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Email: ',
            name: 'email'
        },
        {
            type: 'list',
            message: 'License: ',
            name: 'license',
            choices: ['Apache 2.0', 'MIT', "Mozilla Public License 2.0", "WTFPL", "Unlicense"]
        }
    ])
    .then((response) => {
        console.log(response)
        let licenseBadge = "";
        let licenseDesc = "";
        switch (response.license) {
            case "MIT":
                licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                licenseDesc = licenseInfo.mit;
                break;

            case "Apache 2.0":
                licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                licenseDesc = licenseInfo.apache;
                break;

            case "Unlicense":
                licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
                licenseDesc = licenseInfo.unlicense;
                break;

            case "Mozilla Public License 2.0":
                licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
                licenseDesc = licenseInfo.mpl2;
                break;

            case "WTFPL":
                licenseBadge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
                licenseDesc = licenseInfo.wtfpl;
                break;
        };
        fs.writeFile('README.md',
            `# ${response.title}
${licenseBadge}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
## Description
${response.description}
## Installation
${response.install}
## Usage
${response.usage}
## Contributing
${response.contributing}
## Tests
${response.tests}
### Questions
${response.questions}
- [Github](https://github.com/${response.github})
- <${response.email}>
## License
${licenseDesc}`,
            () => {
                console.log('README creation successful')
            }
        )
    });