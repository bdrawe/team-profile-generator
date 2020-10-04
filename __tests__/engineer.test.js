const { string } = require('yargs');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const engineer = require('../lib/Engineer');

test("test the object of an engineer", () => {
    const engineer = new Engineer("Bryce", "brycerdrawe.b@gmail.com","45","bdrawe")

    expect(engineer.github).toEqual(expect.any(String));
});
test('test get github()', () => {
    const engineer = new Engineer("Bryce", "brycerdrawe.b@gmail.com","45","bdrawe")

    expect(engineer.getGithub()).toEqual(engineer.github);
})
test('test getRole()', () => {
    const engineer = new Engineer("Bryce", "brycerdrawe.b@gmail.com","45","bdrawe")

    expect(engineer.getRole()).toBe("Engineer");
})