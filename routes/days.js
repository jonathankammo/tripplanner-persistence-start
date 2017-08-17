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
    Day.findOrCreate({where: {number: req.body.number}})
    .then(function(createdDay) {
        res.json(createdDay);
    });
});

router.put('/:id/hotel/:hotel', function(req, res, next) {
    Day.findOne({where: {number: req.params.id}})
    .then(function(day) {
        console.log(day);
        return day.setHotel(req.params.hotel);
    })
    .then(function(day) {
        res.json(day);
    })
    .catch(next);
});

router.put('/:id/restaurant/:restaurant', function(req, res, next) {
    Day.findOne({where: {number: req.params.id}})
    .then(function(day) {
        console.log(day);
        return day.addRestaurant(req.params.restaurant);
    })
    .then(function(day) {
        res.json(day);
    })
    .catch(next);
});

router.put('/:id/activity/:activity', function(req, res, next) {
    Day.findOne({where: {number: req.params.id}})
    .then(function(day) {
        console.log(day);
        return day.addActivity(req.params.activity);
    })
    .then(function(day) {
        res.json(day);
    })
    .catch(next);
});

module.exports = router;