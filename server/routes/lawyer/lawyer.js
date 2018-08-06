const router = require('express').Router();
const Lawyer = require('../../models/LawyerCV.js');
const passport = require('passport');
//const sendWelcomeMail = require('../helpers/mailer').sendWelcomeMail;
//const sendTemplate = require('../helpers/mailer').sendTemplate;

//multer config
const multer = require('multer');
const upload = multer({dest: './public/assets'});



router.post('/lawyer',upload.single('image'), (req,res,next) => {
    console.log(req.file);
    console.log(req.body)
    if(req.file) req.body.image = 'http://localhost:3000/assets/' + req.file.filename
    Lawyer.create(req.body)
    .then(lawyers => res.json(lawyers))
    .catch(e=>res.json(e))
});

router.get('/lawyer', (req, res) => {
    // res.send('phone')
    Lawyer.find()
        .then(lawyers => {
            return res.status(200).json(lawyers); //200: The request was fulfilled.                       
        })
        .catch(e => next(e))

});
router.get('/lawyer/:id', (req, res) => {
    Lawyer.findById(req.params.id)
        .then(lawyers => {
            if (!lawyers) return res.status(404)
            return res.status(200).json(lawyers);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});
router.put('/lawyer/:id', (req, res, next) => {
    Lawyer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(lawyers => {
            return res.status(202).json(lawyers)
        }).catch(err => {
            return res.status(404).json(err);
        });

})
router.delete('/lawyer/:id', (req, res, next) => {
    Lawyer.findByIdAndRemove(req.params.id)
        .then(lawyers => {
            return res.status(202).json(lawyers)
        }).catch(err => {
            return res.status(404).json({message:"algo falló hermano"});
        });

})



module.exports = router;