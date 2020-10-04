const Employee = require('../lib/Employee');

class Engineer extends Employee{
    constructor(name,email,id,github){
        //use the methods from Employee
        super(name,email,id);
        this.github = github;
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
    
}

module.exports = Engineer;