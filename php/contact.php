<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $errorMSG = "";
    // NAME
    if (empty($_POST["name"])) {
        $errorMSG = "Name is required ";
    } else {
        $name = $_POST["name"];
    }
    // EMAIL
    if (empty($_POST["email"])) {
        $errorMSG .= "Email is required ";
    } else {
        $email = $_POST["email"];
    }
    // MESSAGE
    if (empty($_POST["message"])) {
        $errorMSG .= "Message is required ";
    } else {
        $message = $_POST["message"];
    }
    $EmailTo = "alfaruq@gmail.com";
    $Subject = "New Message Received";
    // prepare email body text
    $Body = "";
    $Body .= "Name: ";
    $Body .= $name;
    $Body .= "\n";
    $Body .= "Email: ";
    $Body .= $email;
    $Body .= "\n";
    $Body .= "Message: ";
    $Body .= $message;
    $Body .= "\n";
    // send email
    $success = mail($EmailTo, $Subject, $Body, "From:".$email);
    // redirect to success page
    if ($success && $errorMSG == ""){
       echo "success";
    }else{
        if($errorMSG == ""){
            echo "Something went wrong :(";
        } else {
            echo $errorMSG;
        }
    }
} else {
     // Not a POST request, set a 403 (forbidden) response code.
    http_response_code(403);
    echo "There was a problem with your submission, please try again.";
}

?>