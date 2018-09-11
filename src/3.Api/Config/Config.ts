import express      from "express";
import bodyParser   from "body-parser";

import Routes from "./Routes";
import DependencyInjection from "./DependencyInjection";

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Routes.Bind(app);
DependencyInjection.Bind();

app.listen(3001);
console.log("API OK !!!")
