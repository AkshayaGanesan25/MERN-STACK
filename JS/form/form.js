const form = document.getElementById("form");
const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const usernameEl = document.getElementById("username");
const phnoEl = document.getElementById("phno");
const passwordEl = document.getElementById("password");
const dobEl = document.getElementById("dob");
const aadhaarEl = document.getElementById("aadhaar");
const addressEl = document.getElementById("address");
const pincodeEl = document.getElementById("pincode");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Regular Expressions
  const emailpt = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
  const phnopt = /^[6-9]\d{9}$/;
  const usernamept = /^[a-zA-Z0-9_]{3,16}$/;
  const passwordpt = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  const aadhaarpt = /^\d{12}$/;
  const pincodept = /^\d{6}$/;

  // Validation flags
  let valid = true;

  // Name
  if (nameEl.value.trim() === "") {
    document.querySelector(".nameer").textContent = "Name is required.";
    valid = false;
  } else {
    document.querySelector(".nameer").textContent = "";
  }

  // Email
  if (!emailpt.test(emailEl.value.trim())) {
    document.querySelector(".emailer").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.querySelector(".emailer").textContent = "";
  }

  // Username
  if (!usernamept.test(usernameEl.value.trim())) {
    document.querySelector(".er").textContent = "Username must be 3–16 characters (letters, numbers, _).";
    valid = false;
  } else {
    document.querySelector(".er").textContent = "";
  }

  // Phone
  if (!phnopt.test(phnoEl.value.trim())) {
    document.querySelector(".pher").textContent = "Enter a valid 10-digit phone number.";
    valid = false;
  } else {
    document.querySelector(".pher").textContent = "";
  }

  // Password
  if (!passwordpt.test(passwordEl.value.trim())) {
    document.querySelector(".pser").textContent = "Password must be at least 6 characters with a number.";
    valid = false;
  } else {
    document.querySelector(".pser").textContent = "";
  }

  // Aadhaar
  if (!aadhaarpt.test(aadhaarEl.value.trim())) {
    document.querySelector(".aadhaarer").textContent = "Aadhaar must be 12 digits.";
    valid = false;
  } else {
    document.querySelector(".aadhaarer").textContent = "";
  }

  // Pincode
  if (!pincodept.test(pincodeEl.value.trim())) {
    document.querySelector(".piner").textContent = "Enter valid 6-digit pincode.";
    valid = false;
  } else {
    document.querySelector(".piner").textContent = "";
  }

  // DOB
  if (dobEl.value === "") {
    document.querySelector(".dober").textContent = "Please select your date of birth.";
    valid = false;
  } else {
    document.querySelector(".dober").textContent = "";
  }

  if (addressEl.value.trim().length < 5) {
    document.querySelector(".addresser").textContent = "Address must be at least 5 characters.";
    valid = false;
  } else {
    document.querySelector(".addresser").textContent = "";
  }

  
  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});
