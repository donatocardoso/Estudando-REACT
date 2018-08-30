var aluno           = require('../Controllers/AlunoController');
var disciplina      = require('../Controllers/DisciplinaController');
var login           = require('../Controllers/LoginController');
var professor       = require('../Controllers/ProfessorController');

exports.Routers = function(app){
    app.use('/aluno', aluno);
    app.use('/disciplina', disciplina);
    app.use('/login', new login());
    app.use('/professor', professor);
}
