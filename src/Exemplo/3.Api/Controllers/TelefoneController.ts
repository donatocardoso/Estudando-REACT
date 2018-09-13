import TelefoneModel from "../../4.Domain/Telefone/Models/TelefoneModel";
import TelefoneService from "../../4.Domain/Telefone/TelefoneService";

export default class TelefoneController {

    public Get(idTelefone?: number): string {
        return new TelefoneService().Get(idTelefone);
    }

    public Post(model: TelefoneModel): string {
        return new TelefoneService().Post(model);
    }

    public Put(model: TelefoneModel): string {
        return new TelefoneService().Put(model);
    }

    public Delete(idTelefone?: number): string {
        return new TelefoneService().Delete(idTelefone);
    }
    
}
