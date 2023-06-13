const router = require('express').Router();
const { Schema } = require('mongoose');
let HighScore = require('../models/highscore.models');

router.route('/').get((req, res) => {
    HighScore.find()
        .then(highscores => {
            res.json(highscores)
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const game = req.body.game;
    const score = Number(req.body.score);
    const _id = username.concat(game);
    const newScore = new HighScore({username, game, score, _id});
    newScore.save()
        .then(() => res.json('HighScore added:)'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    HighScore.findById(req.params.id)
        .then(highscore => res.json(highscore))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    HighScore.findByIdAndDelete(req.params.id)
        .then(highscore => res.json(highscore))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    HighScore.findById(req.params.id)
        .then(highscore => {
            highscore.score = Number(req.body.score);
            
            highscore.save()
                .then(() => res.json(highscore.username + '\'s ' + highscore.game + ' high score updated :P'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//clear all highscores
router.route('/').delete((req, res) => {
    //has to just be in route '/' or else it wont find any scores
    HighScore.find()
        .then(highscores => {
            for (var i=0; i < highscores.length; i++){
                HighScore.findByIdAndDelete(highscores[i]._id)
                    .catch(err => res.status(400).json('Error: ' + err));
                //sometimes doesnt work for given object id?
            }
            res.json('All scores deleted')
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//find all high scores for username
router.route('/getbyuser/:username').get((req, res) => {
    HighScore.find({username: req.params.username})
        .then(highscore => res.json(highscore))
        .catch(err => res.status(400).json('Error: ' + err));
});

//find all high scores for game
router.route('/getbygame/:game').get((req, res) => {
    HighScore.find({game: req.params.game})
        .then(highscore => res.json(highscore))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;