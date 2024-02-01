const Sequelize = require('sequelize');
const config = require('./config.json');

const {
  development: {database, username, password, dialect, host},
} = config;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = {sequelize};
