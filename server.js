const express = require('express');
const Sequelize = require("sequelize");
const path = require('path');
const session = require('express-session');
const homeRoutes= require('./routes/homeRoutes.js');
const exphbs = require('express-handlebars');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const User = require('./models/User');
const Exercise = require('./models/Exercise');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret',
  cookie: {
    maxAge: 3600000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

app.use(session(sess));

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', homeRoutes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));
});