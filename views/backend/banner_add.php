<?php
session_start();
require_once '../../db.php';

if($_FILES['banner_photo']['name']) {

        $image_name = $_FILES['banner_photo']['name'];
        $image_name_explode = explode(".", $image_name);
        $extension = end($image_name_explode);

        //File Type Checker
        if($extension =='jpg' || $extension =='png' || $extension =='jpeg' || $extension =='svg') {
            //File Size Checker
            if ($_FILES['banner_photo']['size'] <= 5000000) {

                //File Error Checker
                if ($_FILES['banner_photo']['error'] == 0) {
                    $source = $_FILES['banner_photo']['tmp_name'];
                    $image_name = "Banner-" . time()."-".rand(11111,99999). "." . $extension;
                    $destination = "upload/banner_photo/". $image_name;
                    move_uploaded_file($source, $destination);

                    $banner_insert_query = "INSERT INTO banners (banner_photo_name ) VALUES ('$image_name')";
                    mysqli_query($db_conn, $banner_insert_query);
                    $_SESSION['msg_success'] = "Image Uploaded Successfully..";
                    header('location: banner.php');
                }
                else {
                    $_SESSION['photo_error'] = "Corrupted File";
                    header('location: banner.php');
                }
        } else {
            $_SESSION['photo_error'] = "Uploaded file size should be maximum 5MB";
            header('location: banner.php');
        }
    }
        else {
            $_SESSION['photo_error'] = "Your file type isn't Correct";
            header('location: banner.php');
        }
    }
    else {
        $_SESSION['photo_error'] = "Theres no Photo, Please Upload the photo";
        header('location: banner.php');
    }

?>