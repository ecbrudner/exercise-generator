const path = require('path');
const router = require('express').Router();



router.get('/', (req, res) =>
  console.log("Test")
);

module.exports=router