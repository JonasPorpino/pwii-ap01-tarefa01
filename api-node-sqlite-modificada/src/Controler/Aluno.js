import { openDb } from '../configDB.js';

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Aluno ( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER )')
    })
}

export async function selectAlunos(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Aluno')
        .then(alunos=>  res.json(alunos))
    });
}

export async function selectAluno(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('SELECT * FROM Aluno WHERE id=?', [id])
        .then(aluno=> res.json(aluno) );
    });
}

export async function insertAluno(req, res){
    let aluno = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Aluno (nome, idade) VALUES (?,?)', [aluno.nome, aluno.idade]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function updateAluno(req, res){
    let aluno = req.body;
    openDb().then(db=>{
        db.run('UPDATE Aluno SET nome=?, idade=? WHERE id=?', [aluno.nome, aluno.idade, aluno.id]);
    });
    res.json({
        "statusCode": 200
    })
}

export async function deleteAluno(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Aluno WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode": 200
    })
} //referencia do projeto https://github.com/yurimarcon/api-node-sqlite
