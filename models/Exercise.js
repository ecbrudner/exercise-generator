const {DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

const Exercise = sequelize.define('Exercise', {
    //enter columns for each exercise
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    bodyPart: {
        type: DataTypes.STRING,
    },
    equipment: {
        type: DataTypes.STRING,
    },
    gifUrl: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
    },
    instructions: {
        type: DataTypes.STRING,
    },
});

module.exports = Exercise;










