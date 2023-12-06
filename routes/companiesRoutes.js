const { Router } = require('express');

const companiesController = require('../controllers/companiesController')

const router = Router();

router.post('/new')