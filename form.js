document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    errorMsg.textContent = "All fields are required.";
  } else if (!emailPattern.test(email)) {
    errorMsg.textContent = "Enter a valid email address.";
  } else {
    errorMsg.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
  }
});
