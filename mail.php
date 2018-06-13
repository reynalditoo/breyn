<?php
 
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

$fetch_data = file_get_contents("php://input");
$get_data = json_decode($fetch_data);

$name = htmlspecialchars($get_data->name);
$email = $get_data->email;
$subject = $get_data->subject;
$message = htmlspecialchars($get_data->message);

$body = '<html><body>';
$body .= "<p>$message</p>";
$body .= '</body></html>';

$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: $name <$email>\n";
$headers .= "Reply-To: $email";

mail('reynald.doulle@gmail.com', $subject, $body, $headers);
 
?>