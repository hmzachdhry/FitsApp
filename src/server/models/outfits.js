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

// const Profiles = require('./profiles');
// const Weather = require('./weather');
// const Images = require('./images');

// const Outfits = sequelize.define('Outfits', {
//   location: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   occasion: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   images: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   timestamp: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// });

// Outfits.belongsTo(Profiles, {foreignKey: 'profile_id'}); // connected to Profile model
// Outfits.hasOne(Weather, {foreignKey: 'outfit_id'});
// Outfits.hasMany(Images, {foreignKey: 'outfit_id'});

// module.exports = {Outfits};
