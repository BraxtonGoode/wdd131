<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $name = $_GET['name'];
    $email = $_GET['email'];
    $message = $_GET['textarea'];

    // Email address where you want to receive the message
    $to = "tjbgoode@gmail.com";

    // Subject of the email
    $subject = "New Message from Contact Form";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Send email
    mail($to, $subject, $email_content);

    // Redirect user to a thank you page
    header("Location: WDD131/Contacted.html");
    exit();
}
?>