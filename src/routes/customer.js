const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.index);

router.post('/add-customer', customerController.create);

router.get('/delete/:id', customerController.delete);

router.get('/update-customer/:id', customerController.show);
router.post('/update-customer/:id', customerController.update);

module.exports = router;
