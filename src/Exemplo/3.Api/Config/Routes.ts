import { Router } from "express";
import EnderecoModel from "../../4.Domain/Endereco/Models/EnderecoModel";
import EnderecoController from "../Controllers/EnderecoController";
import TelefoneModel from "../../4.Domain/Telefone/Models/TelefoneModel";
import TelefoneController from "../Controllers/TelefoneController";
import UsuarioModel from "../../4.Domain/Usuario/Models/UsuarioModel";
import UsuarioController from "../Controllers/UsuarioController";

export default class Routers {

    private enderecoController: EnderecoController = new EnderecoController();
    private telefoneController: TelefoneController = new TelefoneController();
    private usuarioController: UsuarioController = new UsuarioController();

    constructor(app) {
        this.Bind(app);
    }

    private Bind(app): void {
        
        // UsuarioController
        app.use("/api/endereco", this.Get(this.enderecoController.Get, ["idEndereco"]));
        app.use("/api/endereco", this.Post(this.enderecoController.Post, EnderecoModel));
        app.use("/api/endereco", this.Put(this.enderecoController.Put, EnderecoModel));
        app.use("/api/endereco", this.Delete(this.enderecoController.Delete, ["idEndereco"]));

        // UsuarioController
        app.use("/api/telefone", this.Get(this.telefoneController.Get, ["idTelefone"]));
        app.use("/api/telefone", this.Post(this.telefoneController.Post, TelefoneModel));
        app.use("/api/telefone", this.Put(this.telefoneController.Put, TelefoneModel));
        app.use("/api/telefone", this.Delete(this.telefoneController.Delete, ["idTelefone"]));

        // UsuarioController
        app.use("/api/usuario", this.Get(this.usuarioController.Get, ["idUsuario"]));
        app.use("/api/usuario", this.Post(this.usuarioController.Post, UsuarioModel));
        app.use("/api/usuario", this.Put(this.usuarioController.Put, UsuarioModel));
        app.use("/api/usuario", this.Delete(this.usuarioController.Delete, ["idUsuario"]));

    }

    //#region ## Metódos de Suporte ## 

    protected Get(func: Function, params: object, route: string = "/get"): Router {
        return Router().get(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.params[item];
            }

            res.json(func(params));
        });
    }
    
    protected Post(func: Function, params: object, route: string = "/post"): Router {
        return Router().post(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.body[item];
            }

            res.json(func(params));
        });
    }
    
    protected Put(func: Function, params: object, route: string = "/put"): Router {
        return Router().put(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.body[item];
            }

            res.json(func(params));
        });
    }
    
    protected Delete(func: Function, params: object, route: string = "/delete"): Router {
        return Router().delete(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.params[item];
            }

            res.json(func(params));
        });
    }

    //#endregion
}
