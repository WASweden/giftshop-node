const express = require('express');
const router = express.Router();

const { Contact, ContactField, ContactFieldValue } = require('../sequelize')


// create a contact field
router.post('/api/contacts_fields_values', (req, res) => {
    ContactFieldValue.create(req.body)
        .then(contacts_field_value => res.json(contacts_field))
})
// update a contact field
router.put('/api/contacts_fields_values/:contacts_fields_values_id', (req, res) => {
  ContactFieldValue.update(
    req.body,
    { where: { id: req.params.contacts_fields_values_id} }
  )
      .then(result => res.json(result))
})

module.exports = router;
