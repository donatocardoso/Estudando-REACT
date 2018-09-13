import EnderecoModel from "../../4.Domain/Endereco/Models/EnderecoModel";
import EnderecoService from "../../4.Domain/Endereco/EnderecoService";

export default class EnderecoController {

    public Get(idEndereco?: number): string {
        return new EnderecoService().Get(idEndereco);
    }

    public Post(model: EnderecoModel): string {
        return new EnderecoService().Post(model);
    }

    public Put(model: EnderecoModel): string {
        return new EnderecoService().Put(model);
    }

    public Delete(idEndereco?: number): string {
        return new EnderecoService().Delete(idEndereco);
    }
    
}
