var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.get('/', function(req, res) {
    Day.findAll()
    .then(function(dbDays) {
        res.json({
            templateDays: dbDays
        });
    });
});

router.post('/', function(req, res) {
    Day.create(req.body)
    .then(function(createdDay) {
        res.json(createdDay);
    });
});

module.exports = router;