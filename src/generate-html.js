const { makeEmptyAggregatedTestResult } = require('@jest/test-result')
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
    <body>
    <header>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" style="height:100px; background-color: orange; text-align: center;color:white;">
    <div class="carousel-inner">
      <div class="carousel-item active">
          <h2 style="margin-top:10px;">Go Team Go!</h2>
      </div>
      <div class="carousel-item">
        <h2 style="margin-top:10px;">I love my team</h2>
      </div>
      <div class="carousel-item">
        <h2 style="margin-top:10px;">My team is best!</h2>
      </div>
    </div>
  </div>
    </header>
    <div class="container">
        <div class="row">
            ${array.filter(({ office }) => office).map(({name, id, email, office}) => {
                return `
                <div class="card" style="width: 18rem; margin: 5px;">
                <div class="card-body">
                    <h2>${name}</h2>
                    <h4>Manager</h4>
                    <p>ID: ${id}</p>
                    <p>Office: ${office}</p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email</a>
                </div>
                </div>
                `
            })}
            ${array.filter(({ github }) => github).map(({name, id, email, github}) => {
                return `
                <div class="card" style="width: 18rem; margin: 5px;">
                    <div class= 'card-body'>
                    <h2>${name}</h2>
                    <h4>Engineer</h4>
                    <p>ID: ${id}</p>
                    <p>Github Profile: <a href="https://github.com/${github}" target='_blank'>github.com/${github}</a></p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email</a>
                    </div>
                </div>
                `
            })}
            ${array.filter(({ school }) => school).map(({name, id, email, school}) => {
                return `
                <div class="card" style="width: 18rem; margin: 5px;">
                <div class="card-body">
                    <h2>${name}</h2>
                    <h4>Intern</h4>
                    <p>ID: ${id}</p>
                    <p>School: ${school}</p>
                    <a href="mailto: ${email}" class="btn btn-primary">Email</a>
                </div>
                </div>
                `
            })}
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>
    
    
    `
    writeFile(fileContent);
}
module.exports = makePage;