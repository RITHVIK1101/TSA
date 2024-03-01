document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-input");
    const statesList = document.querySelectorAll(".states-list li");

    searchInput.addEventListener("input", function() {
        const searchText = searchInput.value.toLowerCase();

        statesList.forEach(function(state) {
            const stateName = state.textContent.toLowerCase();
            if (stateName.includes(searchText)) {
                state.style.display = "block";
            } else {
                state.style.display = "none";
            }
        });
    });

    // Event listener for selecting a state
    statesList.forEach(function(state) {
        state.addEventListener("click", function() {
            const selectedState = state.textContent;

            // Make AJAX request to fetch tax incentives for the selected state
            fetch(`get_tax_incentives.php?state=${selectedState}`)
                .then(response => response.json())
                .then(data => {
                    // Display tax incentives data on the page
                    displayTaxIncentives(data);
                })
                .catch(error => console.error('Error fetching tax incentives:', error));
        });
    });

    // Function to display tax incentives data on the page
    function displayTaxIncentives(data) {
        // Assuming you have a div with ID "tax-incentives-container" to display the data
        const container = document.getElementById("tax-incentives-container");
        container.innerHTML = ""; // Clear previous content

        // Iterate over each tax incentive and create HTML elements to display them
        data.forEach(function(item) {
            const incentiveElement = document.createElement("div");
            incentiveElement.classList.add("tax-incentive");
            incentiveElement.innerHTML = `
                <h3>${item.energy_source}</h3>
                <p>${item.incentive}</p>
            `;
            container.appendChild(incentiveElement);
        });
    }
});
