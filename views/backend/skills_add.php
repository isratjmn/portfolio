<?php 
session_start(); 
require_once "../../db.php";

$skill_title = $_POST['skill_title'];
$skill_description = $_POST['skill_description'];
$skill_range = $_POST['skill_range'];

// INSERT CODE START
$skill_insert_query = "INSERT INTO skills (skill_title, skill_description, skill_range) VALUES ('$skill_title', '$skill_description', $skill_range)";
mysqli_query($db_conn, $skill_insert_query);
$_SESSION['added_successfully'] =  "Skills Added Successfully!!";
// INSERT CODE END
header('location: skills.php'); 
?>
