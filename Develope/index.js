const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./tests/manager");
const Engineer = require("./tests/engineer");
const Intern = require("./tests/intern");

const manager = new Manager();
const engineer = [];
const intern = [];
let engineerDivs = "";
let internDivs = "";

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
        engineerCards();
        internCards();
        return;
      } 
    })
    .then(() => {
        fs.writeFileSync("index.html", generateTeam())
    })
}

function addEngineer() {
  var newEngineer = new Engineer();
  newEngineer
    .askForInfo()
    .then(() => newEngineer.askForGitHub())
    .then(() => {
      engineer.push(newEngineer);
      buildTeam();
    });
}

function addIntern() {
  var newIntern = new Intern();
  newIntern
    .askForInfo()
    .then(() => newIntern.askForSchool())
    .then(() => {
      intern.push(newIntern);
      buildTeam();
    });
}

function engineerCards() {
  for (let i = 0; i < engineer.length; i++) {
    var test =
      `<div class="card m-2 border-dark bg-light">
                  <div class="card-body d-flex flex-column">
                    <h5 class="card-title">` + engineer[i].name + `</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
                    <p class="card-text">Employee ID: ` + engineer[i].employeeId + `</p>
                    <a href="mailto:` + engineer[i].email +`">` + engineer[i].email + `</a>
                    <a href="https://github.com/wedniatnuom">` + engineer[i].gitHubName + `</a>
                   </div>
                </div>`;
    engineerDivs += test;
  }
}

function internCards() {
    for (let i = 0; i < intern.length; i++) {
        var test =
          `<div class="card m-2 border-dark bg-light">
                      <div class="card-body">
                        <h5 class="card-title">` + intern[i].name + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
                        <p class="card-text">Employee ID: ` + intern[i].employeeId + `</p>
                        <p class="card-text">School: ` + intern[i].school + `</p>
                        <a href="mailto:` + intern[i].email +`">` + intern[i].email + `</a>
                                               </div>
                    </div>`;
        internDivs += test;
      }
}

const generateTeam = () =>
  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    </head>
    <body>
        <h1 class="bg-primary text-light text-center" style="height: 75px; font-size: 60px;">Hive Mind INC.</h1>
        <div class="d-flex flex-column justify-content-center align-items-center mx-auto">
                <div class="card m-2 border-dark bg-light">
                    <div class="card-body">
                        <h5 class="card-title">` + manager.name + `</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                        <p class="card-text">Office #: ` + manager.officeNumber + `</p>
                        <p class="card-text">Employee ID: ` + manager.employeeId + `</p>
                        <a href="mailto:` + manager.email +`" class="card-link">` + manager.email + `</a>
                    </div>
                </div>
                <div class="d-flex flex-wrap">
                ` + engineerDivs + `
                </div>
                <div class="d-flex flex-wrap">`
                + internDivs + `
                </div>
        </div>
    </body>
    </html>
`;

function init() {
    manager.askForInfo()
      .then(() => manager.askForOfficeNumber())
      .then(() => buildTeam())
}

init();
