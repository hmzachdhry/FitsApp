// const {DataTypes, Sequelize} = require('sequelize');
// // const sequelize = require('sequelize');
// const config = require('../config/config.json');
// const {
//   development: {database, username, password, dialect, host},
// } = config;

// const sequelize = new Sequelize(database, username, password, {
//   host,
//   dialect,
// });

// const Users = require('./users');
// const Outfits = require('./outfits');

// const Profiles = sequelize.define('Profiles', {
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   username: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   location: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   phone_number: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// Profiles.belongsTo(Users, {foreignKey: 'user_id'}); // belongs to profile model via user_id
// // Profiles.hasMany(Outfits, {foreignKey: 'profile_id'});

// module.exports = {Profiles};
