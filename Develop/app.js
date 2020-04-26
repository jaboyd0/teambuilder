console.log("loaded")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = []
async function promptUser() {
    return inquirer
        .prompt(
            {
                type: 'list',
                message: 'Select Role',
                name: 'role',
                choices: ["manager", "engineer", "intern", "Create Team"]
            },
        )
        .then(({ role }) => {
            if (role === "manager") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter Employee Name',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'Please enter Employee ID',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Please enter Employee Email',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'Please enter Employee Office Number',
                        name: 'officeNumber'
                    }
                ])
                .then(({name, id, email, officeNumber}) => {
                    employees.push(new Manager(name, id, email, officeNumber))
                    promptUser();
                })
            }else if (role === "engineer") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter Employee Name',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'Please enter Employee ID',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Please enter Employee Email',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'Please enter Employee Github Username',
                        name: 'github'
                    },
                ])
                .then(({name, id, email, github}) => {
                    employees.push(new Engineer(name, id, email, github))
                    promptUser();
                })
            }else if (role === "intern"){
                return inquirer.prompt([
                    {
                        type: 'input',
                        message: 'Please enter Employee Name',
                        name: 'name'
                    },
                    {
                        type: 'input',
                        message: 'Please enter Employee ID',
                        name: 'id'
                    },
                    {
                        type: 'input',
                        message: 'Please enter interns Email',
                        name: 'email'
                    },
                    {
                        type: 'input',
                        message: 'Please enter interns University',
                        name: 'school'
                    },
                ])
                .then(({name, id, email, school}) => {
                    employees.push(new Intern(name, id, email, school))
                    promptUser();
                })
            }else if (role === "Create Team") {
                console.log(employees)
                const employeeHtml = render(employees)
                fs.writeFile(outputPath, employeeHtml, function(err) {
                    if (err) {
                      return console.log(err);
                    }
                    console.log("Success!");
                  });
            }
        });
};
promptUser();