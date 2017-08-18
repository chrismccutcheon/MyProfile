var express = require('express');
var router = express.Router();
var jsonfile = require("jsonfile");

/* GET users listing. */
router.get('/', function(req, res, next) {
  var file = './data/resume.json';
  jsonfile.readFile(file, function(err, obj) {
    if(obj){
      res.json(obj);
    }
  })
});

module.exports = router;
