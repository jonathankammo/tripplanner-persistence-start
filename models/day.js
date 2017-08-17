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
}, {
    hooks: {
        afterBulkDestroy: function(obj) {
            console.log(obj);
            return Day.findAll({
                where: {
                    number: {
                        $gt: obj.where.number
                    }
                }
            })
            .then(function(daysAfterDeletedRows) {
                return Promise.all(daysAfterDeletedRows.map(function(day) {
                    return day.update({
                        number: day.number - 1
                    });
                }))
            });
        }
    }
});

module.exports = Day;