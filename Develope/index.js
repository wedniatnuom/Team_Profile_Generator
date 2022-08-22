const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Inter = require("./intern");
const Intern = require("./intern");

const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern();

function buildTeam() {
  return inquirer
  .prompt([
    {
      type: "list",
      name: "options",
      message: "Would you like to add a team member?",
      choices: ["Engineer", "Intern", "Finish and Save"],
    },
  ])
}

manager
  .askForInfo()
  .then(() => manager.askForOfficeNumber())
  .then(() => buildTeam())
  .then(() => addEngineer())
  .then(() => addIntern());

function addEngineer() {
  engineer.askForInfo().then(() => engineer.askForGitHub());
}

function addIntern() {
  intern.askForInfo().then(() => intern.askForSchool());
}

// We need something like this to write to the html --------------
// const init = () => {
//     questions()
//         .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
//         .then(() => console.log('Successfully wrote to README'))
//         .catch((err) => console.error(err));
// };

// init();
