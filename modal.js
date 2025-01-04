// Get the image element and the modal
const thumbnail = document.getElementById('thumbnail');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');

// When the image is clicked, open the modal and set the modal image source
thumbnail.onclick = function() {
  modal.style.display = "flex"; // Show the modal
  modalImg.src = thumbnail.src; // Set the source of the image inside the modal
}

// When the close button is clicked, close the modal
closeBtn.onclick = function() {
  modal.style.display = "none"; // Hide the modal
}

// Optionally, close the modal if the user clicks outside the image
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none"; // Hide the modal if the user clicks outside the image
  }
}
