class Employee {
    constructor(name,email,id){
        this.name =  name;
        this.email = email;
        this.id = id;
    }
    newName(){
        return this.name 
    }
    newEmail(){
        return this.email 
    }
    newId(){
        return this.id
    }
    getRole(){
        return "Employee"
    }
}
module.exports = Employee;