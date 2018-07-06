// Classes for routing
var ParticipanteController = require('../Controllers/ParticipanteController');

// more routes for our API will happen here
function setRoutes() {

    router.get('/participante/getAll', function (req, res) {
        res.json(ParticipanteController.getAll());
    });

    router.get('/participante/get', function (req, res) {
        res.json(ParticipanteController.get());
    });

    router.get('/participante/post', function (req, res) {
        res.json(ParticipanteController.post());
    });

    router.get('/participante/put', function (req, res) {
        res.json(ParticipanteController.put());
    });

    router.get('/participante/delete', function (req, res) {
        res.json(ParticipanteController.delete());
    });
}

/*  ================================================================================================================= */
/*    DON'T CODE HERE                                                                                                 */
/*  ================================================================================================================= */
/**/  // call the packages we need                                                                                  /**/
/**/  var express = require('express'); // call express                                                             /**/
/**/  var router = express.Router(); // get an instance of the express Router                                       /**/
/**/                                                                                                                /**/
/**/  var startApi = (function () {                                                                                 /**/
/**/      var app = express(); // define our app using express                                                      /**/
/**/      var bodyParser = require('body-parser');                                                                  /**/
/**/                                                                                                                /**/
/**/      // configure app to use bodyParser()                                                                      /**/
/**/      // this will let us get the data from a POST																/**/
/**/      app.use(bodyParser.urlencoded({ extended: true }));														/**/
/**/      app.use(bodyParser.json());																				/**/
/**/  																												/**/
/**/      var port = process.env.PORT || 3001; // set our port														/**/
/**/  																												/**/
/**/      // test route to make sure everything is working (accessed at GET http://localhost:3001/api)				/**/
/**/      router.get('/', function (req, res) {																		/**/
/**/          res.json({ StatusCode: 200, Api: 'API OK !!!' });														/**/
/**/      });																										/**/
/**/  																												/**/
/**/      setRoutes();																								/**/
/**/  																												/**/
/**/      // REGISTER OUR ROUTES -------------------------------													/**/
/**/      // all of our routes will be prefixed with /api															/**/
/**/      app.use('/api', router);																					/**/
/**/  																												/**/
/**/      // START THE SERVER																						/**/
/**/      // =============================================================================							/**/
/**/      app.listen(port);																							/**/
/**/      console.log('Magic happens on port ' + port);																/**/
/**/ })();																											/**/
/**/																												/**/
/* =================================================================================================================  */
/* =================================================================================================================  */
