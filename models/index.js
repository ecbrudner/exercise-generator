// const User = require('./User');
// const Exercise = require('./Exercise');
// const Favorites = require('./Favorites');

//many to many association between user and exercise

// User.belongsToMany(Exercise, {
//     through: {
//         model: 'Favorites',
//         unique: false
//     },

//     as: 'favorite_exercises'
// });

// Exercise.belongsToMany(User, {
//     through: {
//         model: 'Favorites',
//         unique: false
//     },

//     as: 'favorited_by'
// });



// module.exports = { User, Exercise, Favorites};