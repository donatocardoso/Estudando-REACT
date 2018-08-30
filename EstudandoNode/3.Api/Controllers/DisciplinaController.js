var router = require('express').Router();
var disciplina = require('../../4.Domain/Model/DisciplinaModel');

// rota para consultar no MongoDB os disciplinas
router.get('/', function (req, res, next) {
  console.log("O que será mostrado: " + req.body);

  disciplina.find(function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// rota para inserir no MongoDB um disciplina 
router.post('/', function (req, res, next) {
  console.log("O que será inserido: " + req.body);

  disciplina.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// rota para atualizar no MongoDB um disciplina
router.put('/', function (req, res, next) {
  console.log("O que será alterado: " + req.body);
  
  disciplina.findOneAndUpdate(req.body.Codigo, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// rota para remove no MongoDB um disciplina
router.delete('/', function (req, res, next) {
  console.log("O que será deletado: " + req.body);
  
  disciplina.findOneAndRemove(req.body.Codigo, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// exporta router
module.exports = router;
