// const path = require('path');
const router = require('express').Router();
const { Exercise, User } = require('../models');
const auth = require('../utils/auth');

// Route for rendering the homepage
router.get('/', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect('/login');
      return;
    } else res.render('homepage', {loggedIn:req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// get route '/profile' to render the profile page
router.get('/profile',auth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Exercise }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get route '/login' to render the login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
  
});

module.exports=router;