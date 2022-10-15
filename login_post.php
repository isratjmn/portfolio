<?php
session_start();
$email= $_POST["email"];
$password= md5($_POST["password"]); 

require_once "db.php";
$checking_query= "SELECT COUNT(*) AS status FROM users WHERE email='$email' AND password= '$password'";
$checking_query_output= mysqli_query($db_conn, $checking_query);
$checking_query_output_array= mysqli_fetch_assoc($checking_query_output);
if ($checking_query_output_array['status']== 0) {
    $_SESSION['login_error']=  "Email & Password Doesn't Match";
    header('location:sign-in.php');
} else {
    $_SESSION['s_email_id']= $email;
    header('location:views/backend/dashboard.php');
}
?>