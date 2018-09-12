import LoginModel from "./Models/LoginModel";
import LoginRepository from "../../5.Infra/Repositories/LoginRepository";

export default class LoginService {

    private loginRepository: LoginRepository = new LoginRepository();

    constructor() {}
    
    public GetLogin(model: LoginModel): LoginModel {
        return this.loginRepository.GetLogin(model);
    }

}
