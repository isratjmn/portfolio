<?php
session_start();
require_once '../../db.php';
$service_title = $_POST['service_title'];
$service_desc = $_POST['service_desc'];
$service_icon = $_POST['service_icon'];

if (isset($_POST['status'])) {
    $status = 1;
}
else {
    $status = 0;
}
$service_insert_query= "INSERT INTO services (service_title, service_desc, service_icon, status) VALUES ('$service_title', '$service_desc', '$service_icon', $status)";
mysqli_query($db_conn, $service_insert_query);

header('location: services.php');
?>