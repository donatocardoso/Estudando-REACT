var BaseRepository = require('./BaseRepository');

class LoginRepository extends BaseRepository {

    getLogin(model) {
        return model;
    }


}

module.exports = LoginRepository;
