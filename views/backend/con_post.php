<?php 
session_start(); 
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$error_level= false;
if (empty($name)) {
    $_SESSION['name_error'] = "Your Name is Required";
    $error_level= true;   
} else {
    $_SESSION['name'] = $name;
}
if (empty($email)) {
    $_SESSION['email_error'] = "Your Email is Required";
    $error_level= true;   
} else {
    $_SESSION['email'] = $email;
}
if (empty($message)) {
    $_SESSION['message_error'] = "Your Message is Required";
    $error_level= true;   
} else {
    $_SESSION['message'] = $message;
}

if($error_level) {
    header('location: contact.php');
} else {
    require_once "../../db.php";
    $check_query = "SELECT COUNT(*) AS status FROM contact WHERE name='$name' AND email= '$email'";
    $check_query_output = mysqli_query($db_conn, $check_query);
    $checking_query_output_array = mysqli_fetch_assoc($check_query_output);

    // INSERT CODE START
    $insert_query= "INSERT INTO contact (name, email, message) VALUES ('$name', '$email', '$message')";
    mysqli_query($db_conn, $insert_query);
    $_SESSION['create_successfully'] =  "Contacts Created Successfully!!";
    // INSERT CODE END
    header('location: contact.php'); 

}
?>
