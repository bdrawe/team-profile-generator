const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,email,id,office){
        //use the methods from Employee
        super(name,email,id);
        this.office = office;
    }
        getRole(){
            return 'Manager';
        }
        
    }

    module.exports = Manager;
