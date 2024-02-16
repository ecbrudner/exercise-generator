const path = require('path');
const router = require('express').Router();


const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e80b305f6mshb4c48ce28d66fabp1ee768jsn39199b79955f',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

async function apiCall(){
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  };
  }



router.get('/', (req, res) =>
console.log("Test")
);

apiCall()

module.exports=router