"use strict";

import _loginRepository from "../../5.Infra/Repositories/LoginRepository";

export default class LoginService {

    getLogin(model) {
        return _loginRepository.getLogin(model);
    }

}
