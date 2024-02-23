// const path = require('path');
const router = require('express').Router();

// get route '/' to render the homepage
// get route '/profile' to render the profile page

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