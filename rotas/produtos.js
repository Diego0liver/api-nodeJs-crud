const express = require('express');
const router = express.Router();
const ContProdutos = require('../controler/contProdutos')

router.get('/', ContProdutos.getProdutos)
router.post('/', ContProdutos.postProdutos)
router.get('/:id', ContProdutos.getIdProdutos)
router.patch('/', ContProdutos.editProdutos)
router.delete('/',  ContProdutos.deleteProdutos)

module.exports = router