"use strict";

import LoginRepository from "../../5.Infra/Repositories/LoginRepository";

export default class LoginService {

    private _loginRepository = new LoginRepository();

    public getLogin(model) {
        return this._loginRepository.getLogin(model);
    }

}
