// importando biblioteca do MONGDB
var mongoose = require('mongoose');

// cria uma variável que representa um schema no noSQL
var alunoModel = new mongoose.Schema({
  Codigo: String,
  Nome: String,
  Endereco: String,
  Rg: String
});
  
module.exports = mongoose.model('aluno', alunoModel);
