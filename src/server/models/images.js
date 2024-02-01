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

// const Outfits = require('./outfits');

// const Images = sequelize.define('Images', {
//   url: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },

//   description: {
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
// });

// Images.belongsTo(Outfits, {foreignKey: 'outfit_id'});

// module.exports = {Images};
