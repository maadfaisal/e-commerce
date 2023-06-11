<script>
    // JavaScript code

    // Function to display contact details
    function displayContactDetails() {
      // Replace the placeholders with your actual contact details
      const contactDetails = `
        <h2>Contact Details</h2>
        <p>Email: maadfaisal04@gmail.com</p>
        <p>Phone: 6299572199</p>
        <p>Address: aligarh muslim university,sir shah sulemaan hall</p>
      `;

      // Select the element where the contact details will be displayed
      const contactContainer = document.getElementById('contact-details');

      // Set the HTML content of the element to the contact details
      contactContainer.innerHTML = contactDetails;
    }