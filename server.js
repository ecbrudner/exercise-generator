const express = require('express');
const Sequelize = require("sequelize");
const path = require('path');
const homeRoutes= require('./routes/homeRoutes.js');
const exphbs = require('express-handlebars');

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', homeRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});