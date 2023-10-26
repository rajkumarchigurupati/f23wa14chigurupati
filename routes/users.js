var express = require('express');
var router = express.Router();

/* GET users listing. */
let more =0;
let sum = 0;
router.get('/', function(req, res, next) {
  more = more + 1
  sum = sum + more
  res.send(`sum is ${sum}`);
});

module.exports = router;
