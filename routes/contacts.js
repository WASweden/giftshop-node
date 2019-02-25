const express = require('express');
const router = express.Router();

const { Contact, Note, Todo, ContactField, ContactFieldValue } = require('../sequelize')

// get all contacts
router.get('/api/contacts', (req, res) => {
    Contact.findAll().then(contacts => res.json(contacts))
})
// get one contacts
router.get('/api/contacts/:contact', (req, res) => {
  Contact.findOne({
      where: {
        id: req.params.contact
      },
      include: [
          { model: ContactField,
            attributes: ['id', 'label'],
            include: [
              { model: ContactFieldValue,
                attributes: ['id', 'value']
              }
            ]
          }
      ]
  })
  .then(contact => res.json(contact))
})
// create a contact
router.post('/api/contacts', (req, res) => {
    Contact.create(req.body)
        .then(contact => res.json(contact))
})
// update a contact
router.put('/api/contacts/:contact', (req, res) => {
  Contact.update(
    req.body,
    { where: { id: req.params.contact} }
  )
      .then(result => res.json(result))
})
// delete a contact
router.delete('/api/contacts/:contact', (req, res) => {
  Contact.destroy({
    where: {
      id: req.params.contact
    }
  })
  .then(result => res.json({message: "Successfully deleted"}))
})

// get fields for a contact
router.get('/api/contacts/:contact/fields', (req, res) => {
    ContactField.findAll({
        where: {
          contactId: req.params.contact
        },
        include: [
            { model: ContactFieldValue }
        ]
    })
    .then(contact => res.json(contact))
})

// get notes for a contact
router.get('/api/contacts/:contact/notes', (req, res) => {
    Contact.findOne({
        where: {
          id: req.params.contact
        },
        include: [
            { model: Note, where: { contactId: req.params.contact } }
        ]
    })
    .then(contact => res.json(contact))
})

// get todos for a contact
router.get('/api/contacts/:contact/todos', (req, res) => {
    Contact.findOne({
        where: {
          id: req.params.contact
        },
        include: [
            { model: Todo, where: { contactId: req.params.contact } }
        ]
    })
    .then(contact => res.json(contact))
})

module.exports = router;
