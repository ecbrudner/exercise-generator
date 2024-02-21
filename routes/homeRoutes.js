const path = require('path');
const router = require('express').Router();


const urlUnfiltered = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const urlEquipment =  'https://exercisedb.p.rapidapi.com/exercises/equipmentList?limit=10';
const urlBodyPart =  'https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e80b305f6mshb4c48ce28d66fabp1ee768jsn39199b79955f',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

async function apiCallUnfiltered(){
  try {
    const response = await fetch(urlUnfiltered, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  };
  }

  async function apiCallEquipment(){
    try {
      const response = await fetch(urlEquipment, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    };
    }

    async function apiCallBodyPart(){
      try {
        const response = await fetch(urlBodyPart, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      };
      }



router.get('/', (req, res) =>
console.log("Test")
);

apiCallUnfiltered()
apiCallEquipment()
apiCallBodyPart()

module.exports=router