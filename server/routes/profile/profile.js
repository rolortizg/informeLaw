const router = require('express').Router();
const User = require('../../models/User');
const passport = require('passport');
//const sendWelcomeMail = require('../helpers/mailer').sendWelcomeMail;
//const sendTemplate = require('../helpers/mailer').sendTemplate;

//multer config
// const multer = require('multer');
// const upload = multer({dest: './public/assets'});

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message:"no tienes permiso"});
    }
}

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/private')
    }else{
        next();
    }
}

router.get('/profile',isAuthenticated, (req, res) => {
  console.log(req.user)
  User.findById(req.user._id)
      .then(user => {
          return res.status(200).json(user); //200: The request was fulfilled.                       
      })
      .catch(e => next(e))

});

router.get('/profiles', (req, res) => {
  User.find()
      .then(user => {
          return res.status(200).json(user); //200: The request was fulfilled.                       
      })
      .catch(e => next(e))

});

router.get('/profile/:id', (req, res) => {
  User.findById(req.params.id)
        .then(user => {
            if (!user) return res.status(404)
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(500).json(err);
        });

});


module.exports = router;