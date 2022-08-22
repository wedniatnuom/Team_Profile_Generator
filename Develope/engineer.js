const inquirer = require("inquirer");

const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitHubName) {
        super();
        this.gitHubName = gitHubName
    }
    askForGitHub() {
        return inquirer
        .prompt([
            {
                type: "input",
                name: "gitHubName",
                message: "Please enter the engineer's GitHub user name.",
            }
        ])
    }
};

module.exports = Engineer;