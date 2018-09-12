import LoginModel from "../../4.Domain/Login/Models/LoginModel";
import LoginService from "../../4.Domain/Login/LoginService";

export default class LoginController {

    public GetLogin(model: LoginModel): LoginModel {

        return new LoginService().GetLogin(model);
        
    }
}
