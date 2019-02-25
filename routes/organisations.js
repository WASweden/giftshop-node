const express = require('express');
const router = express.Router();

const { Organisation, Account, User } = require('../sequelize')

// get all contacts
router.get('/api/organisations', (req, res) => {
    Organisation.findAll().then(org => res.json(org))
})

// get all accounts for an organisation:
router.get('/api/:org_id/accounts', (req, res) => {
    Account.findAll({
      where: {
        organisationId: req.params.org_id
      },
      include: [
        {model: User, attributes: ['id', 'first_name', 'last_name']}
      ]
    }
    ).then(acc => res.json(acc))
})

module.exports = router;
