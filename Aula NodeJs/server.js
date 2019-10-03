const express = require ('express');
const Database = require('./database')

const app = express();

app.listen(3000, () => console.log('Servidor ON!') );

// app.get('/', function(req, res){
//     res.send('<h1>Olá Terráqueo</h1>');
// })

app.get('/', (req, res) => res.send('<h1>Olá Terráqueo</h1>'));

app.get('/alunos', function(req, res){
    res.send('<ul><li>Aluno 1</li><li>Aluno 2</li></ul>');
})

// ___________________________________________________

app.get('/api/alunos', (req, res) =>{
    res.send(Database.getAlunos());
});

app.post('/api/alunos', (req, res) => {
    const aluno = req.body;
    Database.addAluno(aluno);
    res.send('Aluno adicionado!');
});

app.get('/api/professores',(req, res) => {
    res.send(Database.getProfessor());
} );

app.post('/api/professores', (req, res) => {
    const professor = req.body;
    Database.addProfessor(professor);
    res.send('Professor cadastrado!');
});
// ----------------------------atividade----------------------
// NO GRUPO DE WHATSS






