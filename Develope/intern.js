const inquirer = require("inquirer");


const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super();
        this.school = school;
    };
    askForSchool() {
        return inquirer
        .prompt([
            {
                type: "input",
                name: "school",
                message: "Please enter the intern's school name.",
            }
        ])
    }
};

module.exports = Intern;