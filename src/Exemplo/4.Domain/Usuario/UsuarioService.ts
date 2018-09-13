import UsuarioModel from "./Models/UsuarioModel";
import UsuarioRepository from "../../5.Repositories/UsuarioRepository";

export default class UsuarioService {

    private UsuarioRepository: UsuarioRepository = new UsuarioRepository();
    
    public Get(idUsuario?: number): string {
        return this.UsuarioRepository.Get(idUsuario);
    }

    public Post(model: UsuarioModel): string {
        return this.UsuarioRepository.Post(model);
    }

    public Put(model: UsuarioModel): string {
        return this.UsuarioRepository.Put(model);
    }

    public Delete(idUsuario?: number): string {
        return this.UsuarioRepository.Delete(idUsuario);
    }

}
