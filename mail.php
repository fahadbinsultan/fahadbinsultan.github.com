<?php
// session_start(); 
$errors = '';
$myemail = 'fahad_dhrubo@yahoo.com';//<-----Put Your email address here.
if(empty($_POST['name']) && empty($_POST['email']) && empty($_POST['message']) )
{
    $errors .= "\n Error: This field is required";
}

$name = $_POST['name']; 
$email = $_POST['email']; 
$message = $_POST['message'];
//echo $name.$email.$message;
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
    $to = $myemail; 
    $email_subject = "Email from http://jimfahad.com \n ";
    $email_body = "You have received a new message. ".
    " Here are the details:\n Full Name: $name \n Email Address: $email \n Message: $message "; 
    
    $headers = 'Email from: '.$email;
    
    mail($to,$email_subject,$email_body,$headers);
} 
?>