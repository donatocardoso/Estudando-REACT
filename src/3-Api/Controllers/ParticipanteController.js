import participanteRepository from '../../5-Infra/Repositories/ParticipanteRepository'

const ParticipanteController = {

    getAll: function() {
        return participanteRepository.getAll();;
    },

    get: function(numSeqlParticipante) {
        return participanteRepository.get(numSeqlParticipante);
    },

    post: function() {
        return 'post';
    },

    put: function() {
        return 'put';
    },

    delete: function(numSeqlParticipante) {
        return participanteRepository.delete(numSeqlParticipante);
    }

}

export default ParticipanteController;
