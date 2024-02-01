const {DataTypes, Sequelize} = require('sequelize');
// const sequelize = require('sequelize');
const config = require('../config/config.json');
const {
  development: {database, username, password, dialect, host},
} = config;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const Profiles = require('./profiles');

const Users = sequelize.define('Users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

// Users.hasOne(Profiles, {foreignKey: 'user_id'}); // hosts profile model via foreign key
// Users.hasMany(Outfit, {foreignKey: 'user_id'}); // do i need to connect user to outfit or can i just connect profile to outfit?

module.exports = {Users};
