// Classes for routing
var ParticipanteController = require('../Controllers/ParticipanteController');

// more routes for our API will happen here
var routes = [
    { Route: '/', Function: function() { return { StatusCode: 200, Api: 'API OK !!!' } }},
    { Route: '/participante/getAll', Function: ParticipanteController.getAll },
    { Route: '/participante/get/:id', Function: ParticipanteController.get },
    { Route: '/participante/post', Function: ParticipanteController.post },
    { Route: '/participante/put', Function: ParticipanteController.put },
    { Route: '/participante/delete', Function: ParticipanteController.delete },
];

module.exports = routes;
