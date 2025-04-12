const express = require('express');
const router = express.Router();
const produtosController  = require("../controllers/produtosControllers")

router.get("/", produtosController.rotaPrincipal);
router.post("/produtos", produtosController.insertProduto);

module.exports = router;