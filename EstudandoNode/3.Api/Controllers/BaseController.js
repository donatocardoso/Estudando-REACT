var router = require('express').Router();

class  BaseController {

    static constructor() {}

    static Get(route, params, func) {
        if(typeof(route) == 'string') {
            router.get('/get' + route, function (req, res, next) {
    
                if(typeof(func) == 'function' && typeof(params) == 'object') {
                    for (var item in params) {
                        params[item] = req.params[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: 'Falha metodo não encontrado !!!' });
                }
    
            });
        }
    }
    
    static Post(route, params, func) {
        if(typeof(route) == 'string') {
            router.post('/post' + route, function (req, res, next) {
    
                if(typeof(func) == 'function' && typeof(params) == 'object') {
                    for (var item in params) {
                        params[item] = req.body[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: 'Falha metodo não encontrado !!!' });
                }
    
            });
        }
    }
    
    static Put(route, params, func) {
        if(typeof(route) == 'string') {
            router.put('/put' + route, function (req, res, next) {
    
                if(typeof(func) == 'function' && typeof(params) == 'object') {
                    for (var item in params) {
                        params[item] = req.body[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: 'Falha metodo não encontrado !!!' });
                }
    
            });
        }
    }
    
    static Delete(route, params, func) {
        if(typeof(route) == 'string') {
            router.delete('/delete' + route, function (req, res, next) {
    
                if(typeof(func) == 'function' && typeof(params) == 'object') {
                    for (var item in params) {
                        params[item] = req.params[item];
                    }
    
                    res.json(func(params));
                } else {
                    res.json({ StatusCode: 404, Message: 'Falha metodo não encontrado !!!' });
                }
    
            });
        }
    }

}

module.exports = BaseController;
