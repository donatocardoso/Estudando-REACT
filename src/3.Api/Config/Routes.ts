"use strict";

import aluno           from "../Controllers/AlunoController";
import disciplina      from "../Controllers/DisciplinaController";
import login           from "../Controllers/LoginController";
import professor       from "../Controllers/ProfessorController";

exports.Routers = function(app){
    app.use("/aluno", aluno);
    app.use("/disciplina", disciplina);
    app.use("/login", login);
    app.use("/professor", professor);
}
