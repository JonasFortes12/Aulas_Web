class Database{
    constructor(){
        this.alunos = [];
    }

    getAlunos(){
        return this.alunos;
    }

    addAluno(aluno){
        this.alunos.push(aluno);
    }

}

module.exports = new Database();
