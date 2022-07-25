const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');

// Importa o controller
const alunoController = require('../controllers/alunoController');


router.get('/', alunoController.alunosList);
router.get('/:id', alunoController.alunosRead);
router.post('/', alunoController.alunosCreate);
router.put('/:id', alunoController.alunosUpdate);
router.delete('/:id', alunoController.alunosDelete);

module.exports = router;
