const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:69f3e71fc61e49fdb0dd226d2981fcc6@localhost:5432/eleven-journal");

module.exports = sequelize;