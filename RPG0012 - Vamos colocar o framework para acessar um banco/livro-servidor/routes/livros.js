const express = require("express");
const router = express.Router();

const { obterLivros, mostrarLivro, incluir, excluir } = require("../modelo/livro-dao");

router.get("/livro", obterLivros);
router.get("/livro/:id", mostrarLivro);
router.post("/livro", incluir);
router.delete("/livro/:id", excluir);

module.exports = router;
