const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const reload = require('reload');

//DATABASE CONFIGURATIONS
const mysql = require('mysql');
//const database = require('./data/live_db_config');
//const database = require('./data/local_db_config');
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "gavoshop"
});

//BACKEND CONFIGURATIONS
const appBackEnd = 'http://localhost:3000/api';
//const appBackEnd = 'https://hr-socialite.herokuapp.com/api';

const checkHeader = function (headers) {
  if (headers['x-wa-key'] != 'Mark') {
    console.log('This person should be denied.');
  } else {
    console.log('This person could be let through.');
  }
};




module.exports = {connection,appBackEnd,checkHeader};
app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'html');
app.set('views', './public');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(require('./routes/routes'));
app.use(require('./routes/contacts'));
app.use(require('./routes/organisations'));
app.use(require('./routes/users'));
app.use(require('./routes/accounts'));
app.use(require('./routes/todos'));
app.use(require('./routes/contacts_fields'));

// dependencies
const { Note } = require('./sequelize')

// create a user
app.post('/api/note', (req, res) => {
    Note.create(req.body)
        .then(note => res.json(note))
})
// get all users
app.get('/api/notes', (req, res) => {
    Note.findAll().then(notes => res.json(notes))
})




const server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
reload(server,app);
