const inquirer = require("inquirer");


class Employee {
    constructor(employeeId, name, email) {
        this.employeeId = employeeId;
        this.name = name;
        this.email = email;
    };

askForInfo() {    
   return inquirer
    .prompt([
        {
            type: "input",
            name: "employeeName",
            message: "What is the new employee's name?",
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is the new employee's ID#?",
        },
        {
            type: "input",
            name: "employeeEmail",
            message: "Please enter the new employee's email address.",
        }
    ]) 
    .then((answers) => {
        this.name = answers.employeeName;
        this.email = answers.employeeEmail;
        this.employeeId = answers.employeeId;
    })
}

// askForId() {    
//     return inquirer
//      .prompt([
//          {
//              type: "input",
//              name: "employeeId",
//              message: "What is the new employee's ID#?",
//          }
//      ])
//  }

// askForEmail() {
//     return inquirer
//     .prompt([
//         {
//             type: "input",
//             name: "employeeEmail",
//             message: "Please enter the new employee's email address.",
//         }
//     ])
// }

}
module.exports = Employee;

