const router = require('express').Router();
const Question = require('../../models/Question');
const passport = require('passport');
//const sendWelcomeMail = require('../helpers/mailer').sendWelcomeMail;
//const sendTemplate = require('../helpers/mailer').sendTemplate;

//multer config
// const multer = require('multer');
// const upload = multer({dest: './public/assets'});



router.post('/question', (req,res,next) => {
    Question.create(req.body)
    .then(question => res.json(question))
    .catch(e=>res.json(e))
});


module.exports = router;