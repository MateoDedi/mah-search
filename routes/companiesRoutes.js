const { Router } = require('express');

const companiesController = require('../controllers/companiesController')

const router = Router();

router.post('/add-companie', companiesController.add_companie);
router.get('/list-companies', companiesController.list_companies);

module.exports = router;