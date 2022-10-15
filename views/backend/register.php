<?php 
session_start();  
$name = $_POST['name'];
$email = $_POST['email'];
$phone_no = $_POST['phone_no'];
$password = $_POST['password'];
$confirm_pass = $_POST['confirm_pass'];

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
if (empty($phone_no)) {
    $_SESSION['phone_no_error'] = "Your Phone Number is Required";
    $error_level= true;   
} else {
    $_SESSION['phone_no'] = $phone_no;
}
if (empty($password)) {
    $_SESSION['password_error'] = "Your Password is Required";
    $error_level= true; 
} else {
    if(strlen($password) < 8) {
    $_SESSION['password_error'] = "Your Password length should be 8 Characters*";
    $error_level= true; 
    }
    else {
        $_SESSION['password'] = $password;
    }    
}
if (empty($confirm_pass)) {
    $_SESSION['confirm_pass_error'] = "Your Confirmation of Password is Required";
    $error_level= true;
} else {
    $_SESSION['confirm_pass'] = $confirm_pass;
}
if ($password != $confirm_pass) {
    $_SESSION['different_pass_error'] = "Your Password & Confirmation Password doesn't match";
    $error_level= true;
} 
if($error_level) {
    header('location: create_user.php');
} else {
    require_once "../../db.php";
    $checking_query = "SELECT COUNT(*) AS status FROM users WHERE email='$email'";
    $checking_query_output = mysqli_query($db_conn, $checking_query);
    $checking_query_output_array = mysqli_fetch_assoc($checking_query_output);
    if ($checking_query_output_array['status'] == 0) {
        $encrypted_password = md5($password);
        // INSERT CODE START
        $insert_query= "INSERT INTO users (name, email, phone_no, password) VALUES ('$name', '$email', '$phone_no', '$encrypted_password')";
        mysqli_query($db_conn, $insert_query);
        // SMS Code Starts
        $url = "http://66.45.237.70/api.php";
        $number="$phone_no";
        $text="Hi There!! New Account Created successfully!! Email: $email & Password: $password";
        $data= array(
            'username'=>"01834833973",
            'password'=>"TE47RSDM",
            'number'=>"$number",
            'message'=>"$text"
        );
        $ch = curl_init(); // Initialize cURL
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $smsresult = curl_exec($ch);
        $p = explode("|",$smsresult);
        $sendstatus = $p[0];
        // SMS Code Ends
        $_SESSION['signup_successfully'] =  "User Account Created Successfully!! A Message send to the New user $phone_no";
        // INSERT CODE END
        unset($_SESSION['name']);
        unset($_SESSION['email']);
        unset($_SESSION['phone_no']);
        unset($_SESSION['password']);
        unset($_SESSION['confirm_pass']);
        header('location: create_user.php');  
    }
    else {
        $_SESSION['email_error'] = "This Email Address Already Taken";
        header('location: create_user.php');
    }
}
?>
