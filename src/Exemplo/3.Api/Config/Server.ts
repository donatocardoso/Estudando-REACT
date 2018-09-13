import "reflect-metadata";
import * as express      from "express";
import * as bodyParser   from "body-parser";

import Routes from "./Routes";

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

new Routes(app);

app.listen(3001);
console.log("API OK !!!")
