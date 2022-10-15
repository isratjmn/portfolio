<?php 
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive Admin Dashboard Template">
    <meta name="keywords" content="admin,dashboard">
    <meta name="author" content="stacks">
    <!-- The above 6 meta tags *must* come first in the head; any other head content must come *after* these tags -->   
    <!-- Title -->
    <title>Neptune - Responsive Admin Dashboard Template</title>
    <!-- Styles -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
    <link href="assets/backend/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/backend/plugins/perfectscroll/perfect-scrollbar.css" rel="stylesheet">
    <link href="assets/backend/plugins/pace/pace.css" rel="stylesheet">
    <!-- Theme Styles -->
    <link href="assets/backend/css/main.min.css" rel="stylesheet">
    <link href="assets/backend/css/custom.css" rel="stylesheet">
    <link rel="icon" type="image/png" sizes="32x32" href="assets/backend/images/neptune.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="assets/backend/images/neptune.png" />
</head>
<body>
    <div class="app app-auth-sign-in align-content-stretch d-flex flex-wrap justify-content-end">
        <div class="app-auth-background"></div>
    <div class="app-auth-container">
        <div class="logo">
            <a href="index.html">Neptune</a>
        </div>
        <p class="auth-description">Please sign-in to your account and continue to the dashboard.<br>Don't have an account?</p> 
        <?php if(isset($_SESSION['signup_successfully'])):?>
            <div class="alert alert-success"> <?=$_SESSION['signup_successfully']?> </div>
        <?php endif?>
        <?php if(isset($_SESSION['login_error'])):?>
            <div class="alert alert-danger"> <?=$_SESSION['login_error']?> </div>
        <?php endif?>
        <form action="login_post.php" method="POST">
            <div class="auth-credentials m-b-xxl">
                <label for="signInEmail" class="form-label">Email address</label>
                <input type="email" class="form-control m-b-md" id="signInEmail" aria-describedby="signInEmail" name="email">
                <label for="signInPassword" class="form-label">Password</label>
                <input type="password" class="form-control" id="signInPassword" aria-describedby="signInPassword" name="password">
            </div>
            <div class="auth-submit">
                <button class="btn btn-primary" type="submit"> Sign In </button>
            </div>
        </form>
            <div class="divider"></div>  
            <?php 
                session_unset();
            ?>          
    </div>
    </div>    
    <!-- Javascripts -->
    <script src="assets/backend/plugins/jquery/jquery-3.5.1.min.js"></script>
    <script src="assets/backend/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/backend/plugins/perfectscroll/perfect-scrollbar.min.js"></script>
    <script src="assets/backend/plugins/pace/pace.min.js"></script>
    <script src="assets/backend/js/main.min.js"></script>
    <script src="assets/backend/js/custom.js"></script>
</body>
</html>