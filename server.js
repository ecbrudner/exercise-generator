const express = require('express');
const Sequelize = require("sequelize");
const path = require('path');
const session = require('express-session');
const homeRoutes= require('./controllers/homeRoutes.js');
// const apiRoutes = require('./controllers/api/');
// const authRoutes = require('./routes/auth.js');
const userRoutes = require('./controllers/api/userRoutes.js')
const exerciseRoutes = require('./controllers/api/exerciseRoutes.js');
const exphbs = require('express-handlebars');
const helpers = require('./utils/utils');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const User = require('./models/index.js');
const Exercise = require('./models/Exercise');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

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

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoutes);
// app.use('/api', apiRoutes);
// app.use('/auth', authRoutes);
app.use('/users', userRoutes);
// app.use('/user', User);
app.use('/exercise', exerciseRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced successfully');
  app.listen(PORT, () => console.log('Now listening'));
})
  .catch((err) => {
    console.error('Error syncing database:', err);
  });