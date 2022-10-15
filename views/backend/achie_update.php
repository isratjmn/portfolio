<?php
session_start();
require_once '../../db.php';
$achieve_icon = $_POST['achieve_icon'];
$achieveCount = $_POST['achieveCount'];
$achieve_title = $_POST['achieve_title'];
$achieve_id = $_POST['achieve_id'];
if (isset($_POST['status'])) {
    $status = 1;
}
else {
    $status = 0;
}
$achieve_update_query = "UPDATE achieves SET achieve_icon = '$achieve_icon', achieveCount = '$achieveCount', achieve_title = '$achieve_title', status = $status WHERE id = $achieve_id";
mysqli_query($db_conn, $achieve_update_query);
header('location: achievement.php');
?>