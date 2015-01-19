<?php

$allowed = array('http://tendian.io', 'https://tendian.io');

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowed)) {
    foreach ($allowed as $domain) {
        header('Access-Control-Allow-Origin: '.$domain);
    }
    sendMail();
} else {
    header("HTTP/1.1 403 Unauthorized");
    exit;
}

function sendMail() {
    // Check for empty fields
    if(empty($_POST['name'])        ||
       empty($_POST['email'])       ||
       empty($_POST['phone'])       ||
       empty($_POST['message']) ||
       !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
       {
        echo "No arguments Provided!";
        return false;
       }

    $name = $_POST['name'];
    $email_address = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Create the email and send the message
    $to = 'erictendian@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
    $email_subject = "Website Contact Form:  $name";
    $email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: noreply@tendian.io\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
    $headers .= "Reply-To: $email_address";
    mail($to,$email_subject,$email_body,$headers);
    return true;
}

?>
