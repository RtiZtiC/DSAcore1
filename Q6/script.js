var modal = document.getElementById("modal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
