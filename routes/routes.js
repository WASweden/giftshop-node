const express = require('express');
const router = express.Router();

const catCtrl = require('../controllers/categoriesController')
const cardsCtrl = require('../controllers/cardsController')
const contactsCtrl = require('../controllers/contactsController')

// Categories routes
router.get('/api/categories', catCtrl.index);
router.get('/api/categories/:id', catCtrl.view);
router.post('/api/categories', catCtrl.create);
router.put('/api/categories/:id', catCtrl.update);
router.delete('/api/categories/:id', catCtrl.destroy);

// Cards routes
router.get('/api/cards', cardsCtrl.index);
router.get('/api/cards/:id', cardsCtrl.view);
router.post('/api/cards', cardsCtrl.create);
router.put('/api/cards/:id', cardsCtrl.update);
router.delete('/api/cards/:id', cardsCtrl.destroy);

//TODO: Routes for customers, purchases/transactions,

module.exports = router;
