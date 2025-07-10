console.log("Amazon Clone Loaded Successfully");

// Optional: Add click interaction
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("You clicked on " + card.querySelector("h2").innerText);
  });
});
