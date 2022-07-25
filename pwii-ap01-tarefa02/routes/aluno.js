const express = require('express');
const router = express.Router();
const verify = require('../utils/verifyToken');

// Importa o controller
const alunoController = require('../controllers/alunoController');


router.get('/',verify, alunoController.alunosList);
router.get('/:id', verify, alunoController.alunosRead);
router.post('/', verify, alunoController.alunosCreate);
router.put('/:id', verify, alunoController.alunosUpdate);
router.delete('/:id', verify, alunoController.alunosDelete);

module.exports = router;
