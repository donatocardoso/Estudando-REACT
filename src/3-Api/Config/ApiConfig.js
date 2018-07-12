/*  ================================================================================================================= */
/*    DON'T CODE HERE                                                                                                 */
/*  ================================================================================================================= */
/**/    // call the packages we need                                                                                /**/
/**/    var express = require('express'); // call express                                                           /**/
/**/    var router = express.Router(); // get an instance of the express Router                                     /**/
/**/    var routes = require('./Routes'); // import routes                                                          /**/
/**/                                                                                                                /**/
/**/    var app = express(); // define our app using express                                                        /**/
/**/    var bodyParser = require('body-parser');                                                                    /**/
/**/                                                                                                                /**/
/**/    // configure app to use bodyParser()                                                                        /**/
/**/    // this will let us get the data from a POST														        /**/
/**/    app.use(bodyParser.urlencoded({ extended: true }));												            /**/
/**/    app.use(bodyParser.json());																		            /**/
/**/  		                                                                                                        /**/
/**/    // set our port																					            /**/
/**/    var port = process.env.PORT || 3001;              												            /**/
/**/    		                                                                                                    /**/
/**/    // Switch route and bind paramertes                         											    /**/
/**/    routes.forEach(function (e, ind) {                                                                          /**/
/**/        router.get(e.Route, function (req, res) {                                                               /**/                
/**/            let keys = [], posParam = 0;                                                                        /**/
/**/                                                                                                                /**/
/**/            // Get name of parameters:                                                                          /**/
/**/            for(let i = 0, el=''; el = e.Route.charAt(i); i++) {                                                /**/
/**/                if (el == ':')                                                                                  /**/
/**/                    posParam = i;                                                                               /**/
/**/                                                                                                                /**/
/**/                if (posParam != 0 && (el == '/' || e.Route.length == i + 1)) {                                  /**/
/**/                    let paramName = e.Route.substring(posParam + 1, e.Route.length == (i + 1) ? (i + 1) : i);   /**/
/**/                    keys.push(paramName);                                                                       /**/
/**/                    posParam = 0;                                                                               /**/
/**/                }                                                                                               /**/
/**/            }                                                                                                   /**/
/**/                                                                                                                /**/
/**/            // Set value in parameters:                                                                         /**/
/**/            keys.forEach(function(ele, i) {                                                                     /**/
/**/                keys[i] = req.params[ele];                                                                      /**/
/**/            });                                                                                                 /**/
/**/                                                                                                                /**/
/**/                                                                                                                /**/
/**/            res.json(keys.length > 0                                                                            /**/
/**/                        ? e.Function.apply(null, keys)                                                          /**/
/**/                        : e.Function());                                                                        /**/
/**/        });                                                                                                     /**/
/**/    });																								            /**/
/**/    																										    /**/
/**/    // REGISTER OUR ROUTES -------------------------------													    /**/
/**/    // all of our routes will be prefixed with /api															    /**/
/**/    app.use('/api', router);																					/**/
/**/  																											    /**/
/**/    // START THE SERVER																						    /**/
/**/    // =============================================================================							/**/
/**/    app.listen(port);																							/**/
/**/    console.log('Magic happens on port ' + port);																/**/
/**/  																												/**/  
/* =================================================================================================================  */
/* =================================================================================================================  */
