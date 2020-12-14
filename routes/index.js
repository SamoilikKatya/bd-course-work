let express = require('express');
let router = express.Router();
let User= require('../models/user');
let Task = require('../models/task');
let validateSignUp = require('../actions/validateSignUp');
let validateLogin = require('../actions/validateLogin');
let newUser = require('../actions/newUser');
let loginUser = require('../actions/loginUser');
let addTask = require('../actions/addTask');
let changeList = require('../actions/changeList');


router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});


router.get('/todoapp', function(req, res, next) {
  res.render('todoapp',{user: req.session.user, list:req.session.list, task:req.session.task});
});

router.get('/signUp', function(req, res, next) {
  const user = {name: "", email: "", psw: ""};
  const errResp = {name: "", email: "", psw: ""};

  if(!req.session.user){
    req.session.user=user;
    req.session.resp=errResp;
  }
  res.render('signUp', {user: req.session.user, resp: req.session.resp });
  req.session.destroy();
});


router.get('/login', function(req, res, next) {
  const errResp = {email:"", pwd:""};
  if(!req.session.resp){
    req.session.resp=errResp;
  }
  res.render('login',  {resp:req.session.resp });
});


 module.exports = router;
