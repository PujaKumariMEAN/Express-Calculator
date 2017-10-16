var express = require('express');
var router = express.Router();

router.get('/', function( req, res){
  res.render('Index');
});

router.get('/Calculate/:val1/:val2', function(req, res){
  var x= parseInt(req.params.val1);
  var y= parseInt(req.params.val2);
  var z= x+y;
  res.json({result:z});
});

router.get('/', function(req, res){
  console.log('Default route');
  res.end();
});

module.exports = router;
