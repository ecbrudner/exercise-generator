const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}
Exercise.init(
{
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
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
});

module.exports = Exercise;










