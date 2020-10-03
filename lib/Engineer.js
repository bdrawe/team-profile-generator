const Employee = require('../lib/Employee');

class Engineer extends Employee{
    constructor(name,email,id,github){
        super(name,email,id);
        this.github = github;
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;