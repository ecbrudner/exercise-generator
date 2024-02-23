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

      // Extract exercise details
      const bodyPart = randomExercise.bodyPart;
      const equipment = randomExercise.equipment;
      const instructions = randomExercise.instructions;
      const name = randomExercise.name;
      const gif = randomExercise.gifUrl;

      console.log("Name :", name);
      console.log("Body Part: ", bodyPart);
      console.log("Equipment: ", equipment);
      console.log("Instructions: ", instructions);
      console.log("GIF: ", gif);
  } catch (error) {
      console.error(error);
  };
}

apiCallUnfiltered()