function calculateCarbonFootprint() {
    // Get selected values
    var transportation = document.getElementById('transportation').value;
    var electricity = document.getElementById('electricity').value;
    var meatConsumption = document.getElementById('meatConsumption').value;

    // Placeholder values for carbon emissions (in kilograms) per year
    var carbonEmissions = {
      walk: 0,
      car: 2000,
      train: 500,
      bike: 0,
      low: 1000,
      medium: 2000,
      high: 3000
    };

    // Calculate total carbon footprint
    var totalCarbonFootprint = carbonEmissions[transportation] + carbonEmissions[electricity] + carbonEmissions[meatConsumption];

    // Display result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "<p> Your estimated carbon footprint per year is: " + totalCarbonFootprint + " kilograms</p>";
}