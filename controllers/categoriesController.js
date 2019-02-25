const app = require('../index');
const connection = app.connection;
const checkHeader = app.checkHeader;

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
  checkHeader(req.headers);
  let q = "SELECT * FROM categories";
  console.log(q);
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status           : 'Success callback',
              data             : results
            })
        })
}

// View
// ========================
function view (req, res) {
  let cat_id = req.params.id;
  let q = "SELECT * FROM categories WHERE id="+cat_id;
  console.log(q);
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status           : 'Success callback',
              data             : results
            })
        })
}

// Create
// ========================
function create (req, res) {
  var new_cat = req.body;

  console.log(new_cat.name);
  let q = "INSERT INTO categories (name) VALUES ('"+new_cat.name+"')";
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status           : 'Success callback',
              data             : results
            })
        })
}

// Update
// ========================
function update (req, res) {
  let cat_id = req.params.id;
  var cat = req.body;

  console.log(cat.name);
  let q = "UPDATE categories SET name='"+cat.name+"' WHERE id="+cat_id;
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status           : 'Success callback',
              data             : results
            })
        })
}

// Delete
// ========================
function destroy (req, res) {
  let cat_id = req.params.id;
  let q = "DELETE FROM categories WHERE id="+cat_id;
  console.log(q);
  connection.query(q, function(err, results) {
          if (err) throw err;
          res.status(200)
            .json({
              status           : 'Success callback',
              data             : results
            })
        })
}
