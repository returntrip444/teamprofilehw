// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee= require("./Employee")

class Manager extends Manager {
    constructor (name, id, email, role, github) {
        super(name, id, email, role)
       
        
    }

    getRole() {
        return "Manager"
    }

    getGithub() {
        return "github"
    }



}
var newManager = new Manager("name", "id", "email", "role", "github")
console.log(newEngineer.getName())
module.exports = Manager