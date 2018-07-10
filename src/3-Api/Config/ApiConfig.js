/*  ================================================================================================================= */
/*    DON'T CODE HERE                                                                                                 */
/*  ================================================================================================================= */
/**/  // call the packages we need                                                                                  /**/
/**/  var express = require('express'); // call express                                                             /**/
/**/  var router = express.Router(); // get an instance of the express Router                                       /**/
/**/  var routes = require('./Routes'); // import routes                                                            /**/
/**/                                                                                                                /**/
/**/  var app = express(); // define our app using express                                                          /**/
/**/  var bodyParser = require('body-parser');                                                                      /**/
/**/                                                                                                                /**/
/**/  // configure app to use bodyParser()                                                                          /**/
/**/  // this will let us get the data from a POST																    /**/
/**/  app.use(bodyParser.urlencoded({ extended: true }));														    /**/
/**/  app.use(bodyParser.json());																				    /**/
/**/																											    /**/
/**/  var port = process.env.PORT || 3001; // set our port														    /**/
/**/																											    /**/
/**/  // test route to make sure everything is working (accessed at GET http://localhost:3001/api)				    /**/
/**/  router.get('/', function (req, res) {																		    /**/
/**/      res.json({ StatusCode: 200, Api: 'API OK !!!' });														    /**/
/**/  });																										    /**/
/**/  																												/**/
/**/  routes.forEach(function (element, index) {                                                                               /**/
/**/      router.get(element.Route, function (req, res) {
/**/          var keys = detectParam(element.Route);
/**/
/**/          if (keys.length > 0) {
/**/              res.json(element.Function);
/**/          } else
/**/              res.json(element.Function);
/**/      });
/**/
/**/  });																								            /**/
/**/  																												/**/
/**/  // REGISTER OUR ROUTES -------------------------------													    /**/
/**/  // all of our routes will be prefixed with /api															    /**/
/**/  app.use('/api', router);																					    /**/
/**/																											    /**/
/**/  // START THE SERVER																						    /**/
/**/  // =============================================================================							    /**/
/**/  app.listen(port);																							    /**/
/**/  console.log('Magic happens on port ' + port);																    /**/
/**/																												/**/
/* =================================================================================================================  */
/* =================================================================================================================  */

detectParam(str) = () => {
    let keys = [], pos = 0;

    for(var index = 0, element=''; element = str.charAt(index); index++){ 
        if (element == ':')
            pos = index;

        if (pos != 0 && (element == '/' || str.length == index + 1)) {
            keys.push(str.substring(pos+1, str.length == (index + 1) ? (index + 1) : index));
            pos = 0;
        }
    }

    return keys;
}
