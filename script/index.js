const patientSearchForm = document.getElementById("patient-search-form");
const patientResultsTable = document.getElementById("patient-results-table");
const firstNameInput = document.getElementById("patient-first-name-input");
const lastNameInput = document.getElementById("patient-last-name-input");

patientSearchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the values from the form fields
  const formData = new FormData(this);
  const lastName = formData.get("patient-last-name");
  const firstName = formData.get("patient-first-name");

  // Generate dummy patient results
  let patientResultsTableContent = "";
  for (let i = 0; i < 30; i++) {
    const maxId = 999999999999;
    const minId = 100000000000;
    const id = Math.floor(Math.random() * (maxId - minId + 1)) + minId;

    const randomDate = Math.floor(Math.random() * (1764814539 - 0 + 1)) + 0;
    const date = new Date(randomDate * 1000).toLocaleDateString("en-US");

    patientResultsTableContent += `<tr>
                <td>${id}</td>
                <td>${lastName}</td>
                <td>${firstName}</td>
                <td>${date}</td>
               </tr>`;
  }

  // Populate the patient results table
  patientResultsTable.innerHTML = ` <thead>
                                        <tr>
                                        <th>Patient ID</th>
                                        <th>Last Name</th>
                                        <th>First Name</th>
                                        <th>Date of Birth</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${patientResultsTableContent}
                                    </tbody>`;
});

// Trigger a sample search on page load
// firstNameInput.value = "fn";
// lastNameInput.value = "ln";
// patientSearchForm.dispatchEvent(new CustomEvent("submit", { cancelable: true }));

// Clear results table button functionality
const clearResultsTableButton = document.getElementById("clear-button");
clearResultsTableButton.addEventListener("click", () => {
  patientResultsTable.innerHTML = "";
  firstNameInput.value = "";
  lastNameInput.value = "";
});
