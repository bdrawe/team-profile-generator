const Employee = require('../lib/Employee');

test('Test to see if the employee object is working', () => {
    const employee = new Employee('Bryce','brycerdrawe.b@gmail.com','45');

    expect(employee.name).toBe("Bryce");
    expect(employee.email).toBe("brycerdrawe.b@gmail.com");
    expect(employee.id).toBe('45');
})
test('test the getName function', () => {
    const employee = new Employee('Bryce','brycerdrawe.b@gmail.com','45');

    expect(employee.getName()).toBe(employee.name);
    
})
test('test the getEmail function', () => {
    const employee = new Employee('Bryce','brycerdrawe.b@gmail.com','45');

    expect(employee.getEmail()).toBe(employee.email);
    
})
test('test the getId function', () => {
    const employee = new Employee('Bryce','brycerdrawe.b@gmail.com','45');

    expect(employee.getId()).toBe(employee.id);
    
})