var _loginRepository = new (require('../../5.Infra/LoginRepository'))();

class LoginService {

    getLogin(model) {
        return _loginRepository.getLogin(model);
    }

}

module.exports = LoginService;
