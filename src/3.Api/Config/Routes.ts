"use strict";

import LoginController from "../Controllers/LoginController";

export default class Routers {

    static Bind(app) {
        app.use("/login", LoginController);
    }

}
