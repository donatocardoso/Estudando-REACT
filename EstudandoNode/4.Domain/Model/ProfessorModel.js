// importando biblioteca do MONGDB
var mongoose = require('mongoose');

// cria uma variável que representa um schema no noSQL
var professorModel = new mongoose.Schema({
  Codigo: String,
  Nome: String,
  Endereco: String,
  Rg: String
});
  
module.exports = mongoose.model('professor', professorModel);
