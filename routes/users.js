var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './uploads' });

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/register', function (req, res, next) {
  res.render('register', { title: 'Register' });
});
router.get('/login', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post(
  '/register',
  upload.single('profileimage'),
  function (req, res, next) {
    // console.log(req.body.name);
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    if (req.file) {
      console.log('Uploading File...');
    } else {
      console.log('No File Uploading...');
    }
  }
);

module.exports = router;
