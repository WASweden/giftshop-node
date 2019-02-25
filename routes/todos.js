const express = require('express');
const router = express.Router();

const { Todo, Contact } = require('../sequelize')

// get all todos
router.get('/api/todos', (req, res) => {
    Todo.findAll().then(todos => res.json(todos))
})
// get one todos
router.get('/api/todos/:todo', (req, res) => {
  Todo.findOne({
      where: {
        id: req.params.todo
      }
  })
  .then(todo => res.json(todo))
})
// create a todo
router.post('/api/todos', (req, res) => {
    Todo.create(req.body)
        .then(todo => res.json(todo))
})
// update a todo
router.put('/api/todos/:todo', (req, res) => {
  Todo.update(
    req.body,
    { where: { id: req.params.todo} }
  )
      .then(result => res.json(result))
})
// delete a todo
router.delete('/api/todos/:todo', (req, res) => {
  Todo.destroy({
    where: {
      id: req.params.todo
    }
  })
  .then(result => res.json({message: "Successfully deleted"}))
})

module.exports = router;
