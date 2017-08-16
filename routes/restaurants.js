var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

router.get('/', function(req, res) {
    Restaurant.findAll()
    .then(function(dbRestaurants) {
        res.json({
            templateRestaurants: dbRestaurants
        });
    });
});

module.exports = router;