<?php
// Check for form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form fields data
    $message = $_POST['message'];
    
    // Email information
    $to = "info.playgroundstudios@gmail.com"; // Change this to your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<p>Thank you for your message. We will get back to you soon!</p>";
    } else {
        echo "<p>Oops! Something went wrong. Please try again later.</p>";
    }
}
?>
