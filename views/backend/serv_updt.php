<?php 
session_start();
require_once '../../db.php';
$service_title = $_POST['service_title'];
$service_desc = $_POST['service_desc'];
$service_icon = $_POST['service_icon'];
$service_id = $_POST['service_id'];

if (isset($_POST['status'])) {
    $status = 1;
}
else {
    $status = 0;
}
$service_update_query = "UPDATE services SET service_title = '$service_title', service_desc = '$service_desc', service_icon = '$service_icon', status = $status WHERE id = $service_id";
mysqli_query($db_conn, $service_update_query);
header('location: services.php'); 
?>