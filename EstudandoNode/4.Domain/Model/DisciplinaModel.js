// importando biblioteca do MONGDB
var mongoose = require('mongoose');

// cria uma variável que representa um schema no noSQL
var disciplinaModel = new mongoose.Schema({
  Codigo: String,
  Nome: String,
  Duracao: String,
  Sigla: String
});
  
module.exports = mongoose.model('disciplina', disciplinaModel);
