const Intern = require('../lib/Intern');

test("test the object of an Intern", () => {
    const intern = new Intern("Bryce", "brycerdrawe.b@gmail.com","45","SUU")

    expect(intern.school).toEqual(expect.any(String));
});
test('test getSchool()', () => {
    const intern = new Intern("Bryce", "brycerdrawe.b@gmail.com","45","SUU")

    expect(intern.getSchool()).toEqual(intern.school);
})
test('test getRole()', () => {
    const intern = new Intern("Bryce", "brycerdrawe.b@gmail.com","45","SUU")

    expect(intern.getRole()).toBe("Intern");
})