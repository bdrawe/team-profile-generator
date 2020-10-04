const { makeEmptyAggregatedTestResult } = require('@jest/test-result')
// const { writeFile } = require('fs/promises')
const writeFile = require('./write-doc')

const makePage =  function(array) {
    const fileContent = 
    `
    <!DOCTYPE html>
    <html lang ="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    </head>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="container">
        <div class="row">
            ${array.filter(({ office }) => office).map(({name, id, email, office}) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h4>Manager</h4>
                    <p>ID: ${id}</p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email</a>
                    <p>Office: ${office}</p>
                </div>
                `
            })}
            ${array.filter(({ github }) => github).map(({name, id, email, github}) => {
                return `
                <div class="card" style="width: 18rem>
                    <div class= 'card-body'>
                    <h2>${name}</h2>
                    <h4>Engineer</h4>
                    <p>ID: ${id}</p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email</a>
                    <p>Github Profile: <a href="https://github.com/${github}" target='_blank'>${github}</a></p>
                    </div>
                </div>
                `
            })}
            ${array.filter(({ school }) => school).map(({name, id, email, school}) => {
                return `
                <div class="card">
                    <h2>${name}</h2>
                    <h4>Intern</h4>
                    <p>ID: ${id}</p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email</a>
                    <p>School: ${school}</p>
                </div>
                `
            })}
        </div>
    </div>

    </html>
    
    
    `
    writeFile(fileContent);
}
module.exports = makePage;