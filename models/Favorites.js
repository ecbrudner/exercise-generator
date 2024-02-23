const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Favorites extends Model {}

Favorites.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
            unique: false,
        },
    },
    exercise_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'exercise',
            key: 'id',
            unique: false,
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites',
});

module.exports = Favorites;
