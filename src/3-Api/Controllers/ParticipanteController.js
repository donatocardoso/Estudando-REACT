var ParticipanteRepository = require('../../5-Infra/Repositories/ParticipanteRepository');

const ParticipanteController = {

    getAll: function() {
        return ParticipanteRepository.getAll();
    },

    get: function(id) {
        return ParticipanteRepository.get(id);
    },

    post: function() {
        return 'post';
    },

    put: function() {
        return 'put';
    },

    delete: function() {
        return ParticipanteRepository.delete();
    }

}

module.exports = ParticipanteController;
