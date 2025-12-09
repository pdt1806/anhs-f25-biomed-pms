const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const firstName = urlParams.get("firstName");
const lastName = urlParams.get("lastName");
const dateOfBirth = urlParams.get("dateOfBirth");

const patientPhoto = document.getElementById("patient-photo");
const patientInfoSection = document.getElementById("patient-information");

const patientIdTextBox = document.getElementById("patient-id-text-box");
const patientNameTextBox = document.getElementById("patient-name-text-box");
const patientDobTextBox = document.getElementById("patient-dob-text-box");

const dischangeForm = document.getElementById("discharge-form");

if (id && firstName && lastName && dateOfBirth) {
  // Populate patient information
  patientIdTextBox.textContent = id;
  patientNameTextBox.textContent = `${firstName} ${lastName}`;
  patientDobTextBox.textContent = dateOfBirth;
} else {
  patientInfoSection.innerHTML = "<p>No patient information available.</p>";
}

dischangeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const dischargeTime = formData.get("discharge-time");
  const dischargeReason = formData.get("discharge-reason");
  const dischargeLocation = formData.get("discharge-location");
  const dischargeNotes = formData.get("discharge-notes");

  alert(
    `Patient Discharged
    ID: ${id}
    Name: ${firstName} ${lastName}
    Date of Birth: ${dateOfBirth}
    Discharge Time: ${dischargeTime}
    Discharge Reason: ${dischargeReasons[dischargeReason]}
    Discharge Location: ${dischargeLocation}
    Discharge Notes: ${dischargeNotes}
    `
  );
});

const dischargeReasons = {
  standard: "Standard Discharge",
  "against-medical-advice": "Discharge Against Medical Advice",
  elopement: "Elopement",
  transfer: "Transfer to Another Facility",
  deceased: "Deceased",
};
