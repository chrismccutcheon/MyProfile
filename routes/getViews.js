var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");

/* GET view data. */
router.get('/all', function(req, res, next) {
  var file = './data/panels.json';
  jsonfile.readFile(file, function(err, obj) {
    if(obj){
      res.json(obj);
    }
  })
});


module.exports = router;
