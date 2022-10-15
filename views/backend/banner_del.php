<?php
session_start();
// Connection with Database
require_once '../../db.php';

$id = $_GET['id'];
$select_query = "SELECT * FROM banners WHERE id = $id";
$query_result = mysqli_query($db_conn, $select_query);

unlink('upload/banner_photo/'. mysqli_fetch_assoc($query_result)['banner_photo_name']);    
$delete_query = "DELETE FROM banners WHERE id = $id";
mysqli_query($db_conn, $delete_query); 
header('location: banner.php');
?>