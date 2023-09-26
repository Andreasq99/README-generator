// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const licenses = 'Apache license 2.0;Boost Software License 1.0;BSD 2-clause "Simplified" license;BSD 3-clause "New" or "Revised" license;Creative Commons Zero v1.0 Universal;Eclipse Public License 2.0;GNU Affero General Public License v3.0;GNU General Public License v2.0;GNU General Public License v3.0;GNU Lesser General Public License v2.1;MIT;Mozilla Public License 2.0;The Unlicense'.split(";");
const licenseBadges = ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)','[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)', '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)', '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'];
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a description for your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please write installation instructions for your application.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please write a description of how to use your application.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Please include guidelines for contributing to this project.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Please include instructions for testing this application.',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Please select the license used from the list below.',
        name: 'license',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username.',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter your email.',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownText = generateMarkdown(data);
    fs.writeFile(fileName,markdownText, (err) => { err ? console.log(err) : console.log("README.md file generated!")});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response)=>{
        writeToFile('README.md', response);
    });
//    console.log(licenses);
}

// Function call to initialize app
init();
