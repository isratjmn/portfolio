<?php
session_start();
// Connection with Database
require_once '../../db.php';

$id = $_GET['id'];
$select_query = "SELECT * FROM about WHERE id = $id";
$query_result = mysqli_query($db_conn, $select_query);

unlink('upload/about_image/'. mysqli_fetch_assoc($query_result)['about_photo_name']);    
$delete_query = "DELETE FROM about WHERE id = $id";
mysqli_query($db_conn, $delete_query); 
header('location: about.php');
?>