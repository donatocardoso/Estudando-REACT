"use strict";

// importando biblioteca do MONGDB
import mongoose from "mongoose";

// cria uma variável que representa um schema no noSQL
var disciplinaModel = new mongoose.Schema({
  Codigo: String,
  Nome: String,
  Duracao: String,
  Sigla: String
});
  
export default mongoose.model('disciplina', disciplinaModel);
