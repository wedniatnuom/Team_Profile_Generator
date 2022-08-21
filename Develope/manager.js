const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super();
        this.officeNumber = officeNumber;
    }

    askForOfficeNumber() {
        return inquirer
        .prompt([
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the manager's office number?",
            }
        ])
    }
};

module.exports = Manager;