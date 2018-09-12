import LoginModel from "../../4.Domain/Login/Models/LoginModel";

export default class LoginRepository {

    constructor() {}
    
    public GetLogin(model: LoginModel): LoginModel {
        return model;
    }

}
