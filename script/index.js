const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
});

const patientSearchForm = document.getElementById("patient-search-form");
const patientResultsTable = document.getElementById("patient-results-table");
const firstNameInput = document.getElementById("patient-first-name-input");
const lastNameInput = document.getElementById("patient-last-name-input");

const printStickersButton = document.getElementById("print-stickers-button");

let patients = [];

patientSearchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  patients = [];

  // Get the values from the form fields
  const formData = new FormData(this);
  const lastName = formData.get("patient-last-name");
  const firstName = formData.get("patient-first-name");

  // Generate dummy patient results
  for (let i = 0; i < 10; i++) {
    const maxId = 999999999999;
    const minId = 100000000000;
    const id = Math.floor(Math.random() * (maxId - minId + 1)) + minId;

    const randomDate = Math.floor(Math.random() * (1764814539 - 0 + 1)) + 0;
    const date = dateFormatter.format(new Date(randomDate * 1000));

    const patient = {
      id: id,
      lastName: lastName,
      firstName: firstName,
      dateOfBirth: date,
    };

    patients.push(patient);
  }

  const patientResultsTableContent = patients
    .map(
      (patient) => `<tr id="table-row-${patient.id}">
                <td><input type="radio" name="selected-patient" value="table-row-${patient.id}-radio"></td>
                <td>${patient.id}</td>
                <td>${patient.lastName}</td>
                <td>${patient.firstName}</td>
                <td>${patient.dateOfBirth}</td>
               </tr>`
    )
    .join("");

  // Populate the patient results table
  patientResultsTable.innerHTML = ` <thead>
                                        <tr>
                                        <th style="width: min-content"></th>
                                        <th>Patient ID</th>
                                        <th>Last Name</th>
                                        <th>First Name</th>
                                        <th>Date of Birth</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${patientResultsTableContent}
                                    </tbody>`;

  patients.forEach((patient) => {
    console.log(patient);
    const tableRow = document.getElementById(`table-row-${patient.id}`);
    tableRow.addEventListener("click", () => {
      const radioButton = tableRow.querySelector(`input[type="radio"][name="selected-patient"]`);
      radioButton.checked = true;
    });
    tableRow.addEventListener("dblclick", () => {
      window.location.href = `/discharge?id=${patient.id}&firstName=${patient.firstName}&lastName=${patient.lastName}&dateOfBirth=${patient.dateOfBirth}`;
    });
  });
});

// Clear results table button functionality
const clearResultsTableButton = document.getElementById("clear-button");
clearResultsTableButton.addEventListener("click", () => {
  patientResultsTable.innerHTML = "";
  firstNameInput.value = "";
  lastNameInput.value = "";
});

// Print stickers button functionality
printStickersButton.addEventListener("click", () => {
  const selectedRadioButton = document.querySelector('input[type="radio"][name="selected-patient"]:checked');
  if (!selectedRadioButton) {
    alert("Please select a patient to print the wristband.");
    return;
  }

  const selectedPatientRowId = selectedRadioButton.value;
  const selectedPatient = patients.find(
    (patient) => `table-row-${patient.id}` === selectedPatientRowId.replace("-radio", "")
  );

  if (selectedPatient)
    window.open(
      `/print.html?id=${selectedPatient.id}&firstName=${selectedPatient.firstName}&lastName=${selectedPatient.lastName}&dateOfBirth=${selectedPatient.dateOfBirth}`,
      "_blank"
    );
});

// Trigger a sample search on page load
// firstNameInput.value = "fn";
// lastNameInput.value = "ln";
// patientSearchForm.dispatchEvent(new CustomEvent("submit", { cancelable: true }));
