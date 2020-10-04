const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name,email,id,school){
        //use the methods from Employee
        super(name,email,id);
        this.school = school;
    }
    //changing the role
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school
    }
}
module.exports = Intern;