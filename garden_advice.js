// Garden advice program that provides gardening tips based on the user's input.

function getGardeningAdvice(plantType) {
  if (typeof plantType !== "string" || plantType.trim() === "") {
    return "Please enter a valid plant type.";
  }

  plantType = plantType.toLowerCase();

  if (plantType === "vegetables") {
    return "For vegetables, ensure they get at least 6-8 hours of sunlight daily and water them regularly.";
  } else if (plantType === "flower") {
    return "For flowers, choose a location with good drainage and use a balanced fertilizer to promote blooming.";
  } else if (plantType === "herbs") {
    return "For herbs, plant them in well-drained soil and harvest them regularly to encourage growth.";
  } else if (plantType === "succulents") {
    return "For succulents, provide plenty of sunlight and water sparingly, allowing the soil to dry out between waterings.";
  } else {
    return "Please enter a valid plant type: vegetables, flower, herbs, or succulents.";
  }
}
