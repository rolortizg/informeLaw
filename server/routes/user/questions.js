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

router.get('/question', (req, res) => {
    // res.send('phone')
    Question.find()
        .then(questions => {
            return res.status(200).json(questions); //200: The request was fulfilled.                       
        })
        .catch(e => next(e))

});
router.get('/question/:id', (req, res) => {
    Question.findById(req.params.id)
        .then(question => {
            if (!question) return res.status(404)
            return res.status(200).json(question);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});
router.put('/question/:id', (req, res, next) => {
    Question.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(question => {
            return res.status(202).json(question)
        }).catch(err => {
            return res.status(404).json(err);
        });

})
router.delete('/question/:id', (req, res, next) => {
    Question.findByIdAndRemove(req.params.id)
        .then(question => {
            return res.status(202).json(question)
        }).catch(err => {
            return res.status(404).json({message:"algo falló hermano"});
        });

})



module.exports = router;