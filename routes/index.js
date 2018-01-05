var express = require('express');
var router = express.Router();
var spotifyController = require('../controllers/SpotifyController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'musicScape'
  });
});

router.get('/musicScape', function(req, res, next) {

  // this is an JSON obj that contains the avg of the song features
  var obj = req.session.obj;
  // this is the time difference between the first song and the last played song
  var landscapeSize = req.session.timeDiff;
  // this is userName
  var user = req.session.user;
  res.render('visualisation', {
    title: 'musicScape',
    d: obj,
    t: landscapeSize,
    u: user
  });

});

router.get('/spotifycallback', function(req, res) {
spotifyController.spotifyCallback(req, res)
});

router.get('/login', function(req, res) {
    spotifyController.spotifyLogin(res);
});

module.exports = router;
