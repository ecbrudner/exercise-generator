const unfilteredResults = 'https://exercisedb.p.rapidapi.com/exercises?limit=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6e80b305f6mshb4c48ce28d66fabp1ee768jsn39199b79955f',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

 async function apiCallUnfiltered() {
  try {
      const response = await fetch(unfilteredResults, options);
      const result = await response.json(); // Parse response directly as JSON

      // Get a random index within the range of the exercises
      const randomIndex = Math.floor(Math.random() * result.length);

      // Access the exercise data at the random index
      const randomExercise = result[randomIndex];

     return {
        bodyPart: randomExercise.bodyPart,
        equipment: randomExercise.equipment,
        gifUrl: randomExercise.gifUrl,
        name: randomExercise.name,
        instructions: randomExercise.instructions,
      };
    } catch (error) {
    console.error(error);
    }
 }

module.exports = {apiCallUnfiltered};