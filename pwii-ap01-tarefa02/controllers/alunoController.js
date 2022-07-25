const db = require('../config/db.config');
const Aluno = db.aluno;

// Listar todos os alunos
exports.alunosList = async(req, res) => {
  try {
    const alunos = await Alunos.findAll();
    res.json({ alunos: alunos });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Detalhar um aluno
exports.alunosRead = async(req, res) => {
  try {
    const aluno = await Alunos.findOne({
      where: {
        id: req.params.id
      }
    });
    res.json({ aluno: aluno });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Criar um aluno
exports.alunosCreate = async(req, res) => {
  try {
    const aluno = await Alunos.create(req.body);
    res.status(201).json({ aluno: aluno });
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Atualizar um aluno
exports.alunosUpdate = async(req, res) => {
  try {
    const aluno = await Alunos.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

// Apagar um aluno
exports.alunosDelete = async(req, res) => {
  try {
    const aluno = await Alunos.destroy({
      where: {
          id: req.params.id
      }
    });
    res.status(204).send();
  } catch(err) {
    res.send({ message: err.message });
  }
};

