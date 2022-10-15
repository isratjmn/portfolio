<?php
session_start();
require_once '../../db.php';
$port_name = $_POST['port_name'];
$port_category = $_POST['port_category'];
$port_details = $_POST['port_details'];

if($_FILES['port_photo']['name']) {
    $photo_name = $_FILES['port_photo']['name'];

    $photo_name_explode = explode(".", $photo_name);
    
    $extension = end($photo_name_explode);
    //File Type Checker
    if($extension =='jpg' || $extension =='png' || $extension =='jpeg' || $extension =='svg') {
        //File Size Checker
        if ($_FILES['port_photo']['size'] <= 5000000) {
            //File Error Checker
            if ($_FILES['port_photo']['error'] == 0) {
                $source = $_FILES['port_photo']['tmp_name'];
                $image_name = "Portfolio-" . time()."-".rand(11111,99999). "." . $extension;
                $destination = "upload/portfolio_img/". $image_name;
                move_uploaded_file($source, $destination);
                $port_insert_query = "INSERT INTO portfolios (port_name, port_category, port_details, port_photo) VALUES ('$port_name', '$port_category', '$port_details', '$image_name')";
                mysqli_query($db_conn, $port_insert_query);
                $_SESSION['success'] = "Portfolio Uploaded Successfully..";
                header('location: portfolio.php');
            }
            else {
                $_SESSION['photo_error'] = "Corrupted File";
                header('location: portfolio.php');
            }
    } else {
        $_SESSION['photo_error'] = "Uploaded file size should be maximum 5MB";
        header('location: portfolio.php');
    }
}
    else {
        $_SESSION['photo_error'] = "Your file type isn't Correct";
        header('location: portfolio.php');
    }
}
else {
    echo "Theres no Photo, Please Upload the photo";
}
?>