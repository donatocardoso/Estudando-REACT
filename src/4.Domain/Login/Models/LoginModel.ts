export default class LoginModel {
    
    public Login: string;
    public Senha: string;
    
    constructor(login: string = "", senha: string = "") {
        this.Login = login;
        this.Senha = senha;
    }
}
