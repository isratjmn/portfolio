<?php
session_start();
// Connection with Database
require_once '../../db.php';

if($_FILES['new_photo']['name']) {
    $photo_name= $_FILES['new_photo']['name'];
    $photo_name_explode= explode(".", $photo_name);
    $extension= end($photo_name_explode);
    //File Type Checker
    if($extension =='jpg' || $extension =='png' || $extension =='jpeg' || $extension =='svg') {
        //File Size Checker
        if ($_FILES['new_photo']['size'] <= 5000000) {
            //File Error Checker
            if ($_FILES['new_photo']['error']== 0) {
                $email_address= $_SESSION['s_email_id'];
                $image_query= "SELECT image FROM users WHERE email= '$email_address'";
                $image_query_output= mysqli_query($db_conn, $image_query);
                $after_assoc= mysqli_fetch_assoc($image_query_output);
                // Check Second Time Upload
                if($after_assoc['image']) {
                    unlink('upload/profile_img/'. $after_assoc['image']);    
                }
                $source= $_FILES['new_photo']['tmp_name'];
                $email_address= $_SESSION['s_email_id'];
                $get_id_query= "SELECT id FROM users WHERE email= '$email_address'";
                $get_query_output= mysqli_query($db_conn, $get_id_query);
                $get_id_query_assoc= mysqli_fetch_assoc($get_query_output);
                
                $user_id= $get_id_query_assoc['id'];
                $image_name= $user_id. "." . $extension;
                $destination= "upload/profile_img/". $image_name;
                move_uploaded_file($source, $destination);
                
                $image_update_query= "UPDATE users SET image = '$image_name' WHERE id = $user_id";
                mysqli_query($db_conn, $image_update_query);
                $_SESSION['photo_success']= "Image Uploaded Successfully..";
                header('location: profile.php');
            }
            else {
                $_SESSION['photo_error']= "Corrupted File";
                header('location: profile.php');
            }
    } else {
        $_SESSION['photo_error']= "Uploaded file size should be maximum 5MB";
        header('location: profile.php');
    }
}
    else {
        $_SESSION['photo_error']= "Your file type isn't Correct";
        header('location: profile.php');
    }
}
else {
    $_SESSION['photo_error']= "You have to choose a Photo to Upload";
    header('location: profile.php');
}
?>