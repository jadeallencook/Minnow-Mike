<?php

$admin = 'hello@minnowmike.com';
$subject = 'Contact From Website';
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
$name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$comments = filter_var($_POST['subject'], FILTER_SANITIZE_STRING) . ' - ' . filter_var($_POST['message'], FILTER_SANITIZE_STRING);
$emailHTML = 'Name: ' . $name . "\r\n" . "\r\n" . "\r\n" . 'Email: ' . $email . "\r\n" . "\r\n" . 'Comments: ' . $comments;
mail($admin, "$subject", $emailHTML, "From:" . $email);

?>

    <center>
        <h1 style="font-family:Helvetica;font-weight:100;margin-top:25px;">We will be getting ahold of you soon!</h1>
        <br />
        <a style="font-family:Helvetica; margin-top:25px; text-decoration: none;" href="index.html">Click here if you are not automatically forwarded.</a>
    </center>

    <script>
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
    </script>