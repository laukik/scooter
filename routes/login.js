var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('login');
});

router.post('/', function(req, res, next) {
	var user_id = req.param('user_id');
	var passwd = req.param('passwd');
	/*
		VAlIDATION LOGIC
	*/
	req.session.user_id = user_id; 
});



module.exports = router;
