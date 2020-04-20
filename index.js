const inquirer = require("inquirer");
console.log("Hello World")


function promptUser() {
    return inquirer
        .prompt(
            {
                type: 'list',
                message: 'Select Role',
                name: 'role',
                choices: ["manager", "engineer", "intern"]
            },
        )
        .then(({ role }) => {
            if (role === "manager") {
                return inquirer.prompt([
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
                        name: 'office'
                    }
                ])
                render()
                
            }else if (role === "engineer") {
                return inquirer.prompt([
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
                render()
                
            }else if (role === "intern") {
                return inquirer.prompt([
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
                render()
                
            }
        });
};





promptUser()