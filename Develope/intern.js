const Employee = require('./employee');

class Intern extends Employee {
    constructor(school) {
        super();
        this.school = school;
    };
    askForOfficeSchool() {
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