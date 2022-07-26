import { Router } from "express";
import { createTable, insertAluno, updateAluno, selectAlunos, selectAluno, deleteAluno } from './Controler/Aluno.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})
router.get('/create', createTable);//foi adicionado apenas para criar a tabela
router.get('/alunos', selectAlunos);
router.get('/aluno', selectAluno);
router.post('/aluno', insertAluno);
router.put('/aluno', updateAluno);
router.delete('/aluno', deleteAluno);

export default router;
