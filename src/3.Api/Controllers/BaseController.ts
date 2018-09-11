"use strict";

import { Router } from "express";
import IBaseController from "../Interfaces/IBaseController";

export default class BaseController implements IBaseController {

    Get(route, params, func) {
        if(typeof(route) == "string") {
            Router().get("/get" + route, function (req, res, next) {
    
                if(typeof(func) == "function" && typeof(params) == "object") {
                    for (var item in params) {
                        params[item] = req.params[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: "Falha metodo não encontrado !!!" });
                }
    
            });
        }
    }
    
    Post(route, params, func) {
        if(typeof(route) == "string") {
            Router().post("/post" + route, function (req, res, next) {
    
                if(typeof(func) == "function" && typeof(params) == "object") {
                    for (var item in params) {
                        params[item] = req.body[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: "Falha metodo não encontrado !!!" });
                }
    
            });
        }
    }
    
    Put(route, params, func) {
        if(typeof(route) == "string") {
            Router().put("/put" + route, function (req, res, next) {
    
                if(typeof(func) == "function" && typeof(params) == "object") {
                    for (var item in params) {
                        params[item] = req.body[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: "Falha metodo não encontrado !!!" });
                }
    
            });
        }
    }
    
    Delete(route, params, func) {
        if(typeof(route) == "string") {
            Router().delete("/delete" + route, function (req, res, next) {
    
                if(typeof(func) == "function" && typeof(params) == "object") {
                    for (var item in params) {
                        params[item] = req.params[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: "Falha metodo não encontrado !!!" });
                }
    
            });
        }
    }

}
