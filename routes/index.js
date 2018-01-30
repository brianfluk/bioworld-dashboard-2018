var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bioworld Dashboard' });
});

/* GET navbar. */
router.get('/', function(req, res, next) {
  res.render('nav', { title: 'Bioworld Dashboard' });
});

router.get('/aboutyou', function(req, res, next) {
  res.render('aboutyou', { title: 'About You as a Learner - Bioworld Dashboard' });
});
router.get('/setyourgoals', function(req, res, next) {
  res.render('setyourgoals', { title: 'Set Your Learning Goals - Bioworld Dashboard' });
});
router.get('/yourcasereports', function(req, res, next) {
  res.render('yourcasereports', { title: 'Your Case Reports - Bioworld Dashboard' });
});
router.get('/compareyourcases', function(req, res, next) {
  res.render('compareyourcases', { title: 'Compare Your Case Reports - Bioworld Dashboard' });
});

module.exports = router;
