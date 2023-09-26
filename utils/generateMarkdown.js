// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenses = 'Apache license 2.0;Boost Software License 1.0;BSD 2-clause "Simplified" license;BSD 3-clause "New" or "Revised" license;Creative Commons Zero v1.0 Universal;Eclipse Public License 2.0;GNU Affero General Public License v3.0;GNU General Public License v2.0;GNU General Public License v3.0;GNU Lesser General Public License v2.1;MIT;Mozilla Public License 2.0;The Unlicense'.split(";");
const licenseBadges = ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)','[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)', '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)', '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)', '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'];

function renderLicenseBadge(license) {
  if(license){
    return licenseBadges[licenses.indexOf(license)];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var name = license.toUpperCase();
  const nameArr = name.split(" ");
  if(nameArr.includes("LICENSE")){
    return `This application uses the ${license}.`;
  } else {
    return `This application uses the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
# Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [License](#license)
7. [Questions](#questions)

## Description <a name="description"></a>
${data.description}

## Installation <a name="installation"></a>
${data.installation}

## Usage <a name="usage"></a>
${data.usage}

## Contributing <a name="contributing"></a>
${data.contributing}

## Tests <a name="tests"></a>
${data.tests}

## License <a name="license"></a>
${renderLicenseSection(data.license)}

## Questions <a name="questions"><a>
My GitHub can be found at [GitHub.com](https://github.com/${data.username}).

You can email me at ${data.email}. Please email me with any additional questions!
`;
}

module.exports = generateMarkdown;
