
 // Get the "Book Now" button and the confirmation modal
 const bookButton = document.getElementById("bookButton");
 const confirmationModal = document.getElementById("confirmationModal");

 // Get the close button for the modal
 const closeModal = document.getElementById("closeModal");

 // When the "Book Now" button is clicked, display the modal
 bookButton.addEventListener("click", () => {
     confirmationModal.style.display = "block";
 });

 // When the close button in the modal is clicked, hide the modal
 closeModal.addEventListener("click", () => {
     confirmationModal.style.display = "none";
 });

 // Close the modal if the user clicks anywhere outside of it
 window.addEventListener("click", (event) => {
     if (event.target == confirmationModal) {
         confirmationModal.style.display = "none";
     }
 });