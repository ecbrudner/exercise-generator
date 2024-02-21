const User = require('./User');
const Exercise = require('./Exercise');

//associations
User.hasMany(Exercise, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});


module.exports = { User, Exercise };