/* eslint-disable camelcase */
var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: Sequelize.INTEGER,
  type: {
    type: Sequelize.VIRTUAL,
    get() {
      return 'day';
    }
  }
});

module.exports = Day;