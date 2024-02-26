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

const generatorButton = document.getElementById('generator');
const exerciseInfoContainer = document.querySelector('.col-mid-7');
const saveButton = document.getElementById('save');


generatorButton.addEventListener('click', async () => {
    try {
        const exerciseData = await apiCallUnfiltered();

        exerciseInfoContainer.innerHTML = `
            <h2>All information about your exercise:</h2>
            <p> Exercise: ${exerciseData.name}</p>
            <p> Description: ${exerciseData.instructions}</p>
            <p> Targeted Area: ${exerciseData.bodyPart}</p>
            <p> Equipment Needed: ${exerciseData.equipment}</p>
            <p> How it's done: </p> <img src="${exerciseData.gifUrl}" alt="Gif of exercise">
            `;
    } catch (error) {
        console.error(error);
    }
});

// Send exercise data to the server to store in the database
saveButton.addEventListener('click', async () => {
    try {
        const exerciseData = await apiCallUnfiltered();
        const response = await fetch('/exercise/save', {
            method: 'POST',
            body: JSON.stringify(exerciseData),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Exercise saved!');
        } else {
            alert('Failed to save exercise');
        }
    } catch (error) {
        console.error(error);
    }
});
    
