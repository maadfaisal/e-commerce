<?php
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the submitted form data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Validate and process the data as needed

    // Save the signup details in a file
    $file = fopen('signup_details.txt', 'a'); // Open the file in append mode
    fwrite($file, "Name: $name\nEmail: $email\n\n");
    fclose($file);

    // Redirect the user to a thank you page
    header('Location: thank_you.html');
    exit;
  }
  ?>