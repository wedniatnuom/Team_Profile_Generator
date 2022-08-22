const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Inter = require("./intern");
const Intern = require("./intern");
const { options } = require("yargs");

const manager = new Manager();
const engineer = [];
const intern = [];

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
  .then((answers) => {
    if (answers.options === "Engineer") {
        addEngineer();
    } else if (answers.options === "Intern") {
        addIntern();
    } else if (answers.options === "Finish and Save") {
        console.log("run print html function");
        console.log(manager, engineer, intern)
        
    }

  });
}

manager
  .askForInfo()
  .then(() => manager.askForOfficeNumber())
  .then(() => buildTeam())


function addEngineer() {
    var newEngineer = new Engineer;
  newEngineer.askForInfo()
  .then(() => newEngineer.askForGitHub())
  .then(() => {
    engineer.push(newEngineer);
    buildTeam();
  });
}

function addIntern() {
  var newIntern = new Intern;
    newIntern.askForInfo().then(() => newIntern.askForSchool())
  .then(() => {
    intern.push(newIntern);
    buildTeam();
  });
}

// We need something like this to write to the html --------------
// const init = () => {
//     questions()
//         .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
//         .then(() => console.log('Successfully wrote to README'))
//         .catch((err) => console.error(err));
// };

// init();
