// const { DataTypes, Sequelize } = require('sequelize');
// // const sequelize = require('sequelize');
// const config = require('../config/config.json');
// const {
//   development: {database, username, password, dialect, host},
// } = config;

// const sequelize = new Sequelize(database, username, password, {
//   host,
//   dialect,
// });

// const Profiles = require('./profiles');
// const Outfits = require('./outfits');

// const Weather = sequelize.define('Weather', {
//   temperature: {
//     type: DataTypes.FLOAT,
//     allowNull: false,
//   },
//   description: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   location: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// });

// Weather.belongsTo(Profiles, {foreignKey: 'profile_id'});
// Weather.belongsTo(Outfits, {foreignKey: 'outfit_id'});

// module.exports = {Weather};
