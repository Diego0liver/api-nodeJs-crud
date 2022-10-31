const express = require('express');
const router = express.Router();
const ContBebidas = require('../controler/contBebidas')



router.get('/', ContBebidas.getBebidas)
router.get('/:id', ContBebidas.getIdBebidas )


 module.exports = router