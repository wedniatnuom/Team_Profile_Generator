class Employee {
    constructor(employeeId, name, email) {
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
    };

askForName() {    
   return inquirer
    .prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the new employee's name?",
        }
    ])
}

askForEmail() {
    return inquirer
    .prompt([
        {
            type: "input",
            name: "employeeEmail",
            message: "Please enter the new employee's email address.",
        }
    ])
}

}
// module.exports = Employee;

