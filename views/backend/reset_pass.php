<?php 
session_start();
require_once '../../db.php';

$password= $_POST['password'];
$new_password= $_POST['new_password'];
$confirm_password= $_POST['confirm_password'];

if(strlen($new_password)< 8) {
    $_SESSION['password_error']= "Your New Password length should be 8 Characters..";
    header('location: profile.php');
}
//CHECK CURRENT PASSWORD RIGHT OR WRONG
$encrypted_password= md5($password); 
$email_id=  $_SESSION['s_email_id'];

$checking_query= "SELECT COUNT(*) AS status FROM users WHERE email='$email_id' AND password= '$encrypted_password'";
$checking_query_output= mysqli_query($db_conn, $checking_query);
$checking_query_output_array= mysqli_fetch_assoc($checking_query_output);
if ($checking_query_output_array['status']== 0) {
    $_SESSION['password_error']=  "Your Current Password is Wrong";
    header('location: profile.php');
    
} 
else {
    if($new_password == $confirm_password) {
        $encrypted_new_password = md5($new_password);
        $update_query= "UPDATE users SET password = '$encrypted_new_password' WHERE email = '$email_id'";
        mysqli_query($db_conn, $update_query);
        $_SESSION['password_success'] =  "Your Password Change Successfully!! Now You can login with your New Password..";
        header('location: profile.php');
    } else {
        $_SESSION['password_error'] =  "Your New Password & Confirm Password don't Match..";
        header('location: profile.php');
    }
}
?>