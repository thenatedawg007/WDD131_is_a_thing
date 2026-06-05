const form = document.querySelector("#fsyForm");

function getCheckedCampuses(campuses) {
  return Array.from(campuses)
    .filter(campus => campus.checked)
    .map(campus => campus.value);
}

function isDateValid() {
  const dateValue = document.getElementById("availableDate").value;
  if (!dateValue) return false;
  const selectedDate = new Date(dateValue);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // compare date only, ignore time
  return selectedDate >= today; // valid if today or in the future
}

// Show/hide notes container when the dropdown changes
form.travelRange.addEventListener("change", () => {
  const notesContainer = document.getElementById("notesContainer");
  notesContainer.hidden = form.travelRange.value !== "many";
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const output = document.getElementById("output");
  const numberOfCampuses = form.travelRange.value;
  const campuses = form.campus;

  if (numberOfCampuses === "one" && getCheckedCampuses(campuses).length === 0) {
    output.textContent = "Please select at least one campus.";
    return;
  }

  if (numberOfCampuses === "many" && getCheckedCampuses(campuses).length < 2) {
    output.textContent = "Please select at least two campuses.";
    return;
  }

  if (!isDateValid()) {
    output.textContent = "Please select a date today or in the future.";
    return;
  }

  // All valid — proceed
  output.textContent = `Thanks, ${form.firstName.value}! Your preferences have been submitted.`;
  console.log({
    name: `${form.firstName.value} ${form.lastName.value}`,
    email: form.email.value,
    travelRange: numberOfCampuses,
    campuses: getCheckedCampuses(campuses),
    availableDate: form.availableDate.value,
    notes: form.notes.value,
  });
});