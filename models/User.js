const {DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    gender: {
        type: DataTypes.STRING,
    },
    bodyWeight: {
        type: DataTypes.DECIMAL,
    },
    height: {
        type: DataTypes.DECIMAL,
    },
    targetWeight: {
        type: DataTypes.DECIMAL,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    monthsAsMember: {
        type: DataTypes.INTEGER,
    },
    
});

module.exports = User;