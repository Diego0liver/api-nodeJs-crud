const express = require('express');
const router = express.Router();
const ContComidas = require('../controler/contComidas')


router.get('/', ContComidas.getComidas)
router.get('/:id', ContComidas.getIdComidas)


 module.exports = router