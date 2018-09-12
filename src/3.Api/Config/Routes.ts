import { Router } from "express";
import LoginModel from "../../4.Domain/Login/Models/LoginModel";
import LoginController from "../Controllers/LoginController";

export default class Routers {

    private loginController: LoginController = new LoginController();

    constructor(app) {
        this.Bind(app);
    }

    private Bind(app): void {
        app.use("/api/login", this.Get("/get", LoginModel, this.loginController.GetLogin));
    }

    protected Get(route: string, params: object, func: Function): Router {
        return Router().get(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.params[item];
            }

            res.json(func(params));
        });
    }
    
    protected Post(route: string, params: object, func: Function): Router {
        return Router().post(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.body[item];
            }

            res.json(func(params)); 
        });
    }
    
    protected Put(route: string, params: object, func: Function): Router {
        return Router().put(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.body[item];
            }

            res.json(func(params));   
        });
    }
    
    protected Delete(route: string, params: object, func: Function): Router {
        return Router().delete(route, function (req, res, next) {
            for (var item in params) {
                params[item] = req.params[item];
            }

            res.json(func(params));
        });
    }
}
