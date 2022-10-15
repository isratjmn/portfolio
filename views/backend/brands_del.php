<?php
session_start();
// Connection with Database
require_once '../../db.php';
$id = $_GET['id'];
$select_query = "SELECT * FROM brands WHERE id = $id";
$query_result = mysqli_query($db_conn, $select_query);

unlink('upload/brand_logos/'. mysqli_fetch_assoc($query_result)['brand_logo_name']);    
$delete_query = "DELETE FROM brands WHERE id = $id";
mysqli_query($db_conn, $delete_query); 
$_SESSION['brand_del_status'] = "Brand Delete Successfully!!";
header('location: brands.php');
?>