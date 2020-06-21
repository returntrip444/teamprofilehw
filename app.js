const employees = []
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

function askQuestions() {
    inquirer
        .prompt([
             {
                 type: "input", 
                 message: "what is your name?",
                 name: "name"

             },
             {
                type: "input",
                message: "what is your ID?",
                name: "ID"

             },
             {
                 type: "input",
                 message: "what is your email?",
                 name: "email"
             },
             {
                 type: "list",
                 message: "what is your role?",
                 choices: ["Engineer", "Intern", "Manager"],
                 name: "role",
                
            },
            {
                type: "input",
                message: "what is your office number?",
                name: "number",
                when: (answers) => answers.role === 'Manager'
            },
            {
                type: "input",
                message: "what is your GitHub username?",
                name: "github",
                when: (answers) => answers.role === 'Engineer'
            },
            {
                type: "input",
                message: "what school do you attend?",
                name: "school",
                when: (answers) => answers.role === 'Intern'
            }
            
            
        ])
        .then(function(answers) {
            console.log(answers)
            if (answers.role === "Engineer") {
                const newEngineer = new Engineer(answers.name, answers.ID, answers.email, answers.role, answers.github)
                console.log(newEngineer)
                employees.push(newEngineer)
            }
            confirm()
        })
        
}
 
function confirm(){
    inquirer.prompt([
        {
            type: "confirm",
            message: "would you like to add another employee?",
            name: "confirm"

        }

              
    ])
    .then(function(answers){
        if (answers.confirm) {
            askQuestions()
        }
        else {
            // call render function with employee array passed in
            render()
        }

    })

    
}
 
askQuestions()

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
