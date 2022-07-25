module.exports = (sequelize, Sequelize) => {
  const Aluno = sequelize.define('Aluno', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    }
  });

  return Aluno;
};
