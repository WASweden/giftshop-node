const express = require('express');
const router = express.Router();

const { User, Organisation, Account, Todo, Note, Contact } = require('../sequelize')

// get all contacts
router.get('/api/users', (req, res) => {
    User.findAll().then(users => res.json(users))
})

// get all contacts according to org:
router.get('/api/:org_id/users', (req, res) => {
    User.findAll(
      {
        where: {
          organisationId: req.params.org_id
        }
      }
    ).then(users => res.json(users))
})

module.exports = router;
