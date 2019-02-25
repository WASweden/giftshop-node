const express = require('express');
const router = express.Router();

const { Account, Contact, Note, Todo } = require('../sequelize')

// get all contacts
router.get('/api/accounts', (req, res) => {
    Account.findAll().then(acc => res.json(acc))
})
// get one Account
router.get('/api/accounts/:account_id', (req, res) => {
  Account.findOne({
      where: {
        id: req.params.account_id
      }
  })
  .then(account => res.json(account))
})

// get one Account's contacts
router.get('/api/accounts/:account_id/contacts', (req, res) => {
  Account.findOne({
      where: {
        id: req.params.account_id
      },
      include: [{ model: Contact, where: {accountId: req.params.account_id }}]
  })
  .then(account => res.json(account))
})


// create a Account
router.post('/api/accounts', (req, res) => {
    Account.create(req.body)
        .then(acc => res.json(acc))
})
// update a contact
router.put('/api/accounts/:account_id', (req, res) => {
  Account.update(
    req.body,
    { where: { id: req.params.account_id} }
  )
      .then(result => res.json(result))
})
// delete a contact
router.delete('/api/accounts/:account_id', (req, res) => {
  Account.destroy({
    where: {
      id: req.params.account_id
    }
  })
  .then(result => res.json({message: "Successfully deleted"}))
})


// get notes for an account
router.get('/api/accounts/:account_id/notes', (req, res) => {
    Account.findOne({
        where: {
          id: req.params.account_id
        },
        include: [
            { model: Note, where: { accountId: req.params.account_id } }
        ]
    })
    .then(acc => res.json(acc))
})

// get todos for a account
router.get('/api/accounts/:account_id/todos', (req, res) => {
    Account.findOne({
        where: {
          id: req.params.account_id
        },
        include: [
            { model: Todo, where: { accountId: req.params.account_id } }
        ]
    })
    .then(acc => res.json(acc))
})

module.exports = router;
