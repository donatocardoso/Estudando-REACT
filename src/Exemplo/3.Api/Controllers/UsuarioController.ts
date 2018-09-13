import UsuarioModel from "../../4.Domain/Usuario/Models/UsuarioModel";
import UsuarioService from "../../4.Domain/Usuario/UsuarioService";

export default class UsuarioController {

    public Get(idUsuario?: number): string {
        return new UsuarioService().Get(idUsuario);
    }

    public Post(model: UsuarioModel): string {
        return new UsuarioService().Post(model);
    }

    public Put(model: UsuarioModel): string {
        return new UsuarioService().Put(model);
    }

    public Delete(idUsuario?: number): string {
        return new UsuarioService().Delete(idUsuario);
    }
    
}
