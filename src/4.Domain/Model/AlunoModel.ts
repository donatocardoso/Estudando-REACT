"use strict";

// importando biblioteca do MONGDB
import mongoose from "mongoose";

// cria uma variável que representa um schema no noSQL
var alunoModel = new mongoose.Schema({
  Codigo: String,
  Nome: String,
  Endereco: String,
  Rg: String
});
  
export default mongoose.model('aluno', alunoModel);
