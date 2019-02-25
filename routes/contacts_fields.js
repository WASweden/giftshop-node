const express = require('express');
const router = express.Router();

const { Contact, ContactField } = require('../sequelize')

// get all contacts fields
router.get('/api/contacts_fields', (req, res) => {
    ContactField.findAll().then(fields => res.json(fields))
})

// create a contact field
router.post('/api/contacts_fields', (req, res) => {
    ContactField.create(req.body)
        .then(contacts_field => res.json(contacts_field))
})
// update a contact field
router.put('/api/contacts_fields/:contacts_field', (req, res) => {
  ContactField.update(
    req.body,
    { where: { id: req.params.contacts_field} }
  )
      .then(result => res.json(result))
})
// delete a contact field
router.delete('/api/contacts_fields/:contacts_field', (req, res) => {
  ContactField.destroy({
    where: {
      id: req.params.contacts_field
    }
  })
  .then(result => res.json({message: "Successfully deleted"}))
})

module.exports = router;
