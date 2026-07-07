// Garden advice program that provides gardening tips based on the user's input.

function getGardeningAdvice(plantType) {
  if (typeof plantType !== "string" || plantType.trim() === "") {
    return "Please enter a valid plant type.";
  }
  // convert the input to lowercase to make the function case-insensitive
  plantType = plantType.toLowerCase();

  // Store plant types and their gardening advice
  const gardeningAdvice = {
    vegetables:
      "For vegetables, ensure they get at least 6-8 hours of sunlight daily and water them regularly.",

    flowers:
      "For flowers, choose a location with good drainage and use a balanced fertilizer to promote blooming.",

    herbs:
      "For herbs, plant them in well-drained soil and harvest them regularly to encourage growth.",

    succulents:
      "For succulents, provide plenty of sunlight and water sparingly, allowing the soil to dry out between waterings.",
  };

  // Check if the plant type exists and return the advice
  if (gardeningAdvice[plantType]) {
    return gardeningAdvice[plantType];
  }

  // Return a message if the plant type is not found
  return "Please enter a valid plant type: vegetables, flowers, herbs, or succulents.";
}
