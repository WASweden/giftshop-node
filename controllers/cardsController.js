const app = require('../index');
const dbh = require('../helpers/db_helpers');
const connection = app.connection;

module.exports = {
  index   : index,
  view   : view,
  create   : create,
  update   : update,
  destroy   : destroy
};



// Index
// ========================
function index (req, res) {

  //console.log(req.headers['x-wa-key']);

  let q = "SELECT * FROM cards";
  console.log(q);
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status  : 'Success callback',
              data    : results
            })
        })
}

// View
// ========================
function view (req, res) {
  let card_id = req.params.id;
  let q = "SELECT * FROM cards WHERE id="+card_id;
  console.log(q);
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status  : 'Success callback',
              data    : results
            })
        })
}

// Create
// ========================
function create (req, res) {
  var card = req.body;

  var no_of_fields = dbh.count_number_of_fields(card);
  var i = 1;
  var query_fields = "";
  var columns = "";
  var values = "";


  // Build fields query:
  for (var p in card) {
    if( card.hasOwnProperty(p) ) {
      if (i == no_of_fields) { // if is the last field in the object, leave out the last comma
        columns += ""+p+"";
        values += connection.escape(card[p]);
      } else {
        columns += ""+p+", ";
        values += connection.escape(card[p])+", ";
        i++;
      }
    }
  };

  // Build query:
  let q = "INSERT INTO cards ("+ columns + ") VALUES ("+values+");";
  console.log(q);

  console.log(card.name);
  //let q = "INSERT INTO cards (name) VALUES ('"+new_card.name+"')";
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status  : 'Success callback',
              data    : results
            })
        })
}

// Update
// ========================
function update (req, res) {
  let card_id = req.params.id;
  var card = req.body;
  var no_of_fields = dbh.count_number_of_fields(card);

  var i = 1;
  var query_fields = "";

  // Build fields query:
  for (var p in card) {
    if( card.hasOwnProperty(p) ) {
      if (i == no_of_fields) { // if is the last field in the object, leave out the last comma
        query_fields += p + "=" + connection.escape(card[p]) + "";
      } else {
        query_fields += p + "=" + connection.escape(card[p]) + ", ";
        i++;
      }
    }
  };

  // Build query:
  let q = "UPDATE cards SET ";
      q += query_fields;
      q += " WHERE id="+card_id;

  // Execute query:
  connection.query(q, function(err, results) {
          //if (err) throw err;
          //if (err) throw err;
          if (err)  {
            console.log(err);
          }
          res.status(200)
            .json({
              status  : 'Success callback',
              data    : results
            })
        })
}

// Delete
// ========================
function destroy (req, res) {
  let card_id = req.params.id;
  let q = "DELETE FROM cards WHERE id="+card_id;
  console.log(q);
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status  : 'Success callback',
              data    : results
            })
        })
}

//TODO: Search function - search categories,type: Company or Private
