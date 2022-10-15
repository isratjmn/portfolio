<?php
session_start();
require_once "../../db.php";
foreach ($_POST as $setting_name => $setting_value) {
    $update_query = "UPDATE settings SET setting_value= '$setting_value' WHERE setting_name= '$setting_name'";
    mysqli_query($db_conn, $update_query);
    $_SESSION['success'] = "Settings Update Successfully";
    header('location: settings.php');   
}
?>