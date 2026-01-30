document.getElementById("bookForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("bookMsg").innerText =
    "✅ Booking submitted successfully!";
});