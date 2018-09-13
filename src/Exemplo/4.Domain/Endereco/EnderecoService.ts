import EnderecoModel from "./Models/EnderecoModel";
import EnderecoRepository from "../../5.Repositories/EnderecoRepository";

export default class EnderecoService {

    private EnderecoRepository: EnderecoRepository = new EnderecoRepository();
    
    public Get(idEndereco?: number): string {
        return this.EnderecoRepository.Get(idEndereco);
    }

    public Post(model: EnderecoModel): string {
        return this.EnderecoRepository.Post(model);
    }

    public Put(model: EnderecoModel): string {
        return this.EnderecoRepository.Put(model);
    }

    public Delete(idEndereco?: number): string {
        return this.EnderecoRepository.Delete(idEndereco);
    }

}
