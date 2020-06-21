// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee= require("./Employee")

class Intern extends Intern {
    constructor (name, id, email, role, school) {
        super(name, id, email, role)
        this.school= school
        
    }

    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }


}
var newIntern = new Intern("name", "id", "email", "role", "school")

module.exports = Intern