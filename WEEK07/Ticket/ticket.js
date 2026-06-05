const form = document.querySelector("#fsyForm");

const studentId = document.getElementById("studentId");

const code = document.getElementById("code");

function isDateValid() {
  const dateValue = document.getElementById("availableDate").value;
  if (!dateValue) return false;
  const selectedDate = new Date(dateValue);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // compare date only, ignore time
  return selectedDate >= today; // valid if today or in the future
}

// Show/hide notes container when the dropdown changes
form.ticketType.addEventListener("change", () => {
  const studentIdContainer = document.getElementById("studentIdContainer");
  const accessCode = document.getElementById("accessCode");
  studentIdContainer.hidden = form.ticketType.value !== "student";
  accessCode.hidden = form.ticketType.value !== "guest";
});

function getFormattedDate() {
  const dateValue = document.getElementById("availableDate").value;
  const selectedDate = new Date(dateValue);
  return selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }); // e.g. "June 5, 2026"
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const createdTicket = document.getElementById("createdTicket");
  const output = document.getElementById("output");
  const studentIdCount = form.studentId.value.length;
  const codeCheck = form.code.value;
  const ticketType = form.ticketType.value;

  if (ticketType === "student"){
    if (studentIdCount !== 9) {
      output.textContent = "Student I# must be 9 digits";
      return;
    }
  }

  if (ticketType === "guest"){
    if (codeCheck !== "EVENT131") {
      output.textContent = "Please input the access code that was given to you";
      return;
    }
  }
  

  if (!isDateValid()) {
    output.textContent = "Please select a date today or in the future.";
    return;
  }

  // All valid — proceed
  output.innerHTML = `${form.firstName.value} ${form.lastName.value}<br>${form.ticketType.value}<br>${getFormattedDate()}`;
  createdTicket.hidden = false;


});