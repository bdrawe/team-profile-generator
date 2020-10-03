const Employee = require('../lib/Employee');

test('Test to see if the employee object is working', () => {
    const employee = new Employee('Bryce','brycerdrawe.b@gmail.com',45);

    expect(employee.name).toBe("Bryce");
    expect(employee.email).toBe("brycerdrawe.b@gmail.com");
    expect(employee.id).toBe('45');
})