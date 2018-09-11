"use strict";

import login           from "../Controllers/LoginController";

exports.Routers = function(app){
    app.use("/login", login);
}
