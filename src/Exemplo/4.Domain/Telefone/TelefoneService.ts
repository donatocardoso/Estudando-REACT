import TelefoneModel from "./Models/TelefoneModel";
import TelefoneRepository from "../../5.Repositories/TelefoneRepository";

export default class TelefoneService {

    private TelefoneRepository: TelefoneRepository = new TelefoneRepository();
    
    public Get(idTelefone?: number): string {
        return this.TelefoneRepository.Get(idTelefone);
    }

    public Post(model: TelefoneModel): string {
        return this.TelefoneRepository.Post(model);
    }

    public Put(model: TelefoneModel): string {
        return this.TelefoneRepository.Put(model);
    }

    public Delete(idTelefone?: number): string {
        return this.TelefoneRepository.Delete(idTelefone);
    }

}
