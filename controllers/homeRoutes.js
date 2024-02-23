// const path = require('path');
const router = require('express').Router();

// Route for rendering the homepage
router.get('/', (req, res) => {
  res.render('homepage'); // Render the 'homepage' template
});


// get route '/profile' to render the profile page
router.get('/profile', (req, res) => {
  // If not logged in render log in template
  if (!req.session.loggedIn) {
    res.render('login');
    return;
  }
  // Otherwise, render the 'Profile' template
  res.render('profile');
});

//get route '/login' to render the login page
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });

module.exports=router;