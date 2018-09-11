"use strict";

import { Container } from "inversify";

// Services
import LoginService from "../../4.Domain/Login/LoginService";
import ILoginService from "../../4.Domain/Login/ILoginService";

// Repositories
import ILoginRepository from "../../4.Domain/Login/ILoginRepository";
import LoginRepository from "../../5.Infra/Repositories/LoginRepository";

export default class DependencyInjection {

    public static Bind() {
        var container = new Container();

        // Services
        container.bind<ILoginService>(LoginService);

        // Repositories
        container.bind<ILoginRepository>(LoginRepository);
    }
    
}
