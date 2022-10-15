<?php
session_start();
// Connection with Database
require_once '../../db.php';
//Photo Selection
if($_FILES['brand_img']['name']) {
    $photo_name = $_FILES['brand_img']['name'];
    $photo_name_explode = explode(".", $photo_name);
    $extension = end($photo_name_explode);
    //File Type Checker
    if($extension =='jpg' || $extension =='png' || $extension =='jpeg' || $extension =='svg') {
        //File Size Checker
        if ($_FILES['brand_img']['size'] <= 5000000) {

            //File Error Checker
            if ($_FILES['brand_img']['error'] == 0) {
                $source = $_FILES['brand_img']['tmp_name'];
                $image_name = time()."-".rand(11111,99999). "." . $extension;
                $destination = "upload/brand_logos/". $image_name;
                move_uploaded_file($source, $destination);
                $image_insert_query = "INSERT INTO brands (brand_logo_name) VALUES ('$image_name')";
                mysqli_query($db_conn, $image_insert_query);
                $_SESSION['photo_success'] = "Image Uploaded Successfully";
                header('location: brands.php');
            }
            else {
                $_SESSION['photo_error'] = "Corrupted File";
                header('location: brands.php');
            }
    } else {
        $_SESSION['photo_error'] = "Uploaded file size should be maximum 5MB";
        header('location: brands.php');
    }
}
    else {
        $_SESSION['photo_error'] = "Your file type isn't Correct";
        header('location: brands.php');
    }
}
else {
    $_SESSION['photo_error'] = "You have to choose a Photo to Upload";
    header('location: brands.php');
}
?>