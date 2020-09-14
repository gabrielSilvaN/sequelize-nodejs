const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');

const connection = new Sequelize(dbConfig);

// existe a possibilidade de automatizar esse processo de inicializar o model com consign por exemplo
User.init(connection);
Address.init(connection);

// cadastrando os models para fazer associações
Address.associate(connection.models);

module.exports = connection;