const express = require('express')
const router = express.Router()

const Unit1Controller = require('../controllers/unit1')
const Unit3Controller = require('../controllers/unit3')
const Unit6Controller = require('../controllers/unit6')

router.get('/unit1', Unit1Controller.getTerms)
router.get('/unit3', Unit3Controller.getTerms)
router.get('/unit6', Unit6Controller.getTerms)

module.exports = router