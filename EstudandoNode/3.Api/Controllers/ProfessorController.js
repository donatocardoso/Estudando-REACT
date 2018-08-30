var router = require('express').Router();
var professor = require('../../4.Domain/Model/ProfessorModel');

// rota para consultar no MongoDB os professores
router.get('/', function (req, res, next) {
  console.log("O que será mostrado: " + req.body);

  professor.find(function (err, products) {
    if (err) return next(err);
      res.json(products);
  });
});

// rota para inserir no MongoDB um professor 
router.post('/', function (req, res, next) {
  console.log("O que será inserido: " + req.body);

  professor.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// rota para atualizar no MongoDB um professor
router.put('/', function (req, res, next) {
  console.log("O que será alterado: " + req.body);
  
  professor.findOneAndUpdate(req.body.Codigo, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// rota para remove no MongoDB um professor
router.delete('/', function (req, res, next) {
  console.log("O que será deletado: " + req.body);
  
  professor.findOneAndRemove(req.body.Codigo, req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);
  });
});

// exporta router
module.exports = router;
