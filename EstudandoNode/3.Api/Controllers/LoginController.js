var BaseController = require('./BaseController');
var LoginModel = require('../../4.Domain/Model/LoginModel');
var _loginService = new (require('../../4.Domain/Services/LoginService'))();

class LoginController extends BaseController {

    constructor() {
        this.Post('', { Login:'', Senha:'' }, function(o) {
            return _loginService.getLogin(new LoginModel(o.Login, o.Senha));
        });
    }
    
}

module.exports = LoginController;
