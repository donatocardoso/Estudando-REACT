import ILoginController  from "./BaseController";
import LoginModel      from "../../4.Domain/Model/LoginModel";
import _loginService   from "../../4.Domain/Services/LoginService";

class LoginController extends ILoginController {

    constructor() {
        _loginService = new _loginService();

        super.Get("", {}, function name(params) {
        
        });

        super.Post("", {}, function name(params) {
        
        });
        
        super.Put("", {}, function name(params) {
            
        });
        
        super.Delete("", {}, function name(params) {
            
        });
    }

}

export default LoginController;
