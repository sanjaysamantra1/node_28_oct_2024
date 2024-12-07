var express = require('express');
const usersArr = require('../../../data/users.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users', { usersArr, title: 'User List' })
});

module.exports = router;
