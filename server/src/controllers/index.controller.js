const controller = {};

controller.user = require('./user.controller');
controller.blog = require('./blog.controller');

module.exports = controller;