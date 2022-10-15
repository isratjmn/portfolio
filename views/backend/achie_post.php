<?php
session_start();
require_once '../../db.php';
$achieve_icon = $_POST['achieve_icon'];
$achieveCount = $_POST['achieveCount'];
$achieve_title = $_POST['achieve_title'];
if (isset($_POST['status'])) {
    $status = 1;
}
else {
    $status = 0;
}
$achieve_query= "INSERT INTO achieves (achieve_icon, achieveCount, achieve_title, status) VALUES ('$achieve_icon', '$achieveCount', '$achieve_title', $status)";
mysqli_query($db_conn, $achieve_query);
header('location: achievement.php');
?>

