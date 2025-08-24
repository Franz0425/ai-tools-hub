// script.js

// Open and close modals
document.querySelectorAll(".tool-card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// Example tool functions
function summarizeText() {
  let input = document.getElementById("summary-input").value;
  if (!input.trim()) return alert("Please enter text.");
  document.getElementById("summary-output").innerText =
    "Summary: " + input.substring(0, 80) + "...";
}

function generatePassword() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let pass = "";
  for (let i = 0; i < 12; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById("password-output").innerText = "Generated: " + pass;
}
