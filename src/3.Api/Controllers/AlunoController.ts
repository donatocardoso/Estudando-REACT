"use strict";

import { router } from "express";
import aluno from "../../4.Domain/Model/AlunoModel";

// rota para consultar no MongoDB os alunos
router.get("/", function (req, res, next) {
  console.log("O que será mostrado: " + req.body);

  aluno.find(function (err, products) {
    if (err) return next(err);
      res.json(products);
  });
});

// rota para inserir no MongoDB um aluno 
router.post("/", function (req, res, next) {
  console.log("O que será inserido: " + req.body);

  aluno.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// rota para atualizar no MongoDB um aluno
router.put("/", function (req, res, next) {
  console.log("O que será alterado: " + req.body);
  
  aluno.findOneAndUpdate(req.body.Codigo, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// rota para remove no MongoDB um aluno
router.delete("/", function (req, res, next) {
  console.log("O que será deletado: " + req.body);
  
  aluno.findOneAndRemove(req.body.Codigo, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// exporta router
module.exports = router;
