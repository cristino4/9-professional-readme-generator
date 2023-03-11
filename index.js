const inquirer = require('inquirer');

console.log("Welcom the the professional README generator!");

const questions  = [
  {
    type: 'input',
    name: 'projectTitle',
    message: 'What is the project title?',
    // validate(value){
    //   const pass = typeof value;
    //   if (pass = 'string'){
    //     return true;
    //   } 
    //   return 'please enter a valid project title';
    // },
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
    name: 'licenses',
    message: 'Enter the license for the project',
    choices: ['MIT License', 'Other1', 'other2']
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


inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
  // console.log(answers);
  // console.log(typeof answers)
});