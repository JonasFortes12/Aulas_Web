class Database{
    constructor(){
        this.alunos = [];
        this.professores = [];
    }

    getAlunos(){
        return this.alunos;
    }

    addAluno(aluno){
        this.alunos.push(aluno);
    }

    getProfessor(){
        return this.professores;
    }

    addProfessor(professor){
        this.professores.push(professor); 
}

module.exports = new Database();
