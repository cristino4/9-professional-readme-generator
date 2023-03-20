const inquirer = require('inquirer');
const fs = require('fs')
const writer = require('writer')

const licenseList = ['Apache License 2.0', 'GNU General Public LIcense v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License',
'BSD 3-clause "New" of "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
'GNU General Public License v2.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0',
'The Unlicense'];

const licenseBadges = [
  {
    license: "Apache License 2.0",
    badge: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  {
    license: "GNU General Public LIcense v3.0",
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  },
  {
    license: "MIT License",
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  },
  {
    license: 'BSD 2-Clause "Simplified" License',
    badge: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  },
  {
    license: 'BSD 3-clause "New" of "Revised" License',
    badge: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  },
  {
    license: "Boost Software License 1.0",
    badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
    license: "Creative Commons Zero v1.0 Universal",
    badge: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  },
  {
    license: "Eclipse Public License 2.0",
    badge: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
  },
  {
    license: "GNU General Public License v2.0",
    badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
  },
  {
    license: "GNU Lesser General Public License v2.1",
    badge: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  },
  {
    license: "Mozilla Public License 2.0",
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  },
  {
    license: "The Unlicense",
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
]

console.log("Welcome the the professional README generator!");

const questions  = [
  {
    type: 'input',
    name: 'repository',
    message: 'Enter the project GitHub repository link'
  },
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'projectDescription',
    message: 'Enter a project description',
  },
  {
    type: 'input',
    name: 'installationInstructions',
    message: 'Enter the installtion instructions',
  },
  {
    type: 'input',
    name: 'usageInformation',
    message: 'Enter the usage information',
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'Enter the contribution guidelines.',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'Enter the test instructions.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter the license for the project',
    choices: licenseList
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your github username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address'
  }
];

function parseBadge(answers){
  license = answers.license;
  for (i = 0; i<licenseBadges.length; i++){
    if(licenseBadges[i].license === license){
      return licenseBadges[i].badge
    }
  }
}

function updateReadme(answers){
  console.log(answers)
  //title
  title = `# ${answers.projectTitle}\n`
  fs.writeFile('readme1.md', title, function (err) {
    if (err) throw err;
  })
    //license badge
    badge = parseBadge(answers)
    msg = `\n${badge}\n`
    fs.appendFile('readme1.md',msg,function(err){
      if(err) throw err;
    })
  //description
  head = `\n## Description\n`
  body= `Repository Link: ${answers.repository} \n${answers.projectDescription}\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  //table of contents
  head = `\n## Table of Contents\n`
  body = `* [Description](#description)\n* [Installation Instructions](#installation-instructions)\n* 
  [Usage Information](#usage-information)\n* [License](#license)\n* [Contributing](#how-to-contribute)\n* [Test](#test-instructions)\n* [Questions](#questions)\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  //installation
  head = `## Installation Instructions\n`
  body = `${answers.installationInstructions}\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  //usage
  head = `## Usage Information\n`
  body = `${answers.usageInformation}\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  //license
  head = `## License\n`
  body = `${answers.license}\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  //contributing
  head = `## How to Contribute\n`
  body = `${answers.contributionGuidelines}\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  //tests
  head = `## Test Instructions\n`
  body = `${answers.testInstructions}\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  //questions
  link = `[${answers.githubUsername}](https://github.com/${answers.githubUsername})`
  head = `## Questions\n`
  body = `Questions may be sent to:\n* Email: ${answers.email}\n* GitHub Username: ${link}\n`
  message = head + "\n" + body
  fs.appendFile('readme1.md', message, function (err) {
    if (err) throw err;
  })
  console.log('File has been saved!');


}

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  // ans = JSON.stringify(answers, null, '  ');
  updateReadme(answers)
  // console.log(answers);
  // console.log(typeof answers)
});