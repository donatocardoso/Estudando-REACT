"use strict";

import express      from "express";
import bodyParser   from "body-parser";
import mongoose     from "mongoose";
import bluebird     from "bluebird";

var urlPost = bodyParser.urlencoded({ extended: true });

var app = express();
app.use(bodyParser.json());

// conecta no banco de dados
mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost/academico", { promiseLibrary: bluebird })
  .then(() =>  console.log("connection succesful"))
  .catch((err) => console.error(err));

require("./Routes").Routers(app);

app.listen(3001);
