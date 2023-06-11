// JavaScript code for your e-commerce website

// Function to handle adding a product to the cart
function addToCart(productId) {
    // Add your logic here to add the product to the cart
    // You can update the UI to show a success message or update the cart count
  }
  
  // Function to handle the form submission for the contact page
  function submitContactForm() {
    // Add your logic here to handle the form submission
    // You can perform form validation, send the form data to a server, etc.
  }
  
  // Add event listeners to elements
  
  // Add to Cart button click event
  const addToCartButtons = document.querySelectorAll('.btn');
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.dataset.productId;
      addToCart(productId);
    });
  });
  
  // Contact form submission event
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    submitContactForm();
  });
  // JavaScript code for your e-commerce website

// Function to display contact details
function displayContactDetails() {
  // Replace the placeholders with your actual contact details
  const contactDetails = `
    <h2>Contact Details</h2>
    <p>Email: maadfaisal04@gmail.com </p>
    <p>whatsapp: 6299572199</p>
    <p>Address: aligarh muslim university,sir shah sulemaan hall</p>
    `;
  
  // Select the element where the contact details will be displayed
  const contactContainer = document.getElementById('contact-details');
  
  // Set the HTML content of the element to the contact details
  contactContainer.innerHTML = contactDetails;
}

// Add event listener to the contact button
const contactButton = document.getElementById('contact-button');
contactButton.addEventListener('click', displayContactDetails);

// Other existing functions and event listeners in your code
// ...

// Add new functions and event listeners as needed
// ...
// JavaScript code for your e-commerce website

// Function to display about details
function displayAboutDetails() {
  // Replace the placeholder with your own about details
  const aboutDetails = `
    <h2>About Us</h2>
    <p>Welcome to our clothing store! We are dedicated to providing high-quality and stylish clothing for all fashion enthusiasts.</p>
    <p>Feel free to explore our collection and find the perfect outfits for any occasion.</p>
  `;

  // Select the element where the about details will be displayed
  const aboutContainer = document.getElementById('about-details');

  // Set the HTML content of the element to the about details
  aboutContainer.innerHTML = aboutDetails;
}

// Add event listener to the about button
const aboutButton = document.getElementById('about-button');
aboutButton.addEventListener('click', displayAboutDetails);

function scrollToSignupButton() {
    const signupButton = document.getElementById('signup-button');
    signupButton.scrollIntoView({ behavior: 'smooth' });
  }