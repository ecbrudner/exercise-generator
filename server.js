const express = require('express');
const Sequelize = require("sequelize");
const path = require('path');
const homeRoutes= require('./routes/homeRoutes.js');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', homeRoutes);

// sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));





// const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '6e80b305f6mshb4c48ce28d66fabp1ee768jsn39199b79955f',
// 		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
// 	}
// };


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
