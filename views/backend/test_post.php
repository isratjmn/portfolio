<?php
session_start();
require_once '../../db.php';
$test_reviews = $_POST['test_reviews'];
$client_name = $_POST['client_name'];
$designation = $_POST['designation'];

if($_FILES['test_photo']['name']) {
    $photo_name = $_FILES['test_photo']['name'];
    $photo_name_explode = explode(".", $photo_name);
    $extension = end($photo_name_explode);
    //File Type Checker
    if($extension =='jpg' || $extension =='png' || $extension =='jpeg' || $extension =='svg') {
        //File Size Checker
        if ($_FILES['test_photo']['size'] <= 5000000) {
            //File Error Checker
            if ($_FILES['test_photo']['error'] == 0) {
                $source = $_FILES['test_photo']['tmp_name'];
                $image_name = "testimonial-" . time()."-".rand(11111,99999). "." . $extension;
                $destination = "upload/test_img/". $image_name;
                move_uploaded_file($source, $destination);
                $port_sql = "INSERT INTO testimonials (test_reviews, client_name, designation, test_photo) VALUES ('$test_reviews', '$client_name', '$designation', '$image_name')";
                
                mysqli_query($db_conn, $port_sql);
                $_SESSION['success'] = "Testimonial Uploaded Successfully..";
                header('location: testimonial.php');
            }
            else {
                $_SESSION['photo_error'] = "Corrupted File";
                header('location: testimonial.php');
            }
    } else {
        $_SESSION['photo_error'] = "Uploaded file size should be maximum 5MB";
        header('location: testimonial.php');
    }
}
    else {
        $_SESSION['photo_error'] = "Your file type isn't Correct";
        header('location: testimonial.php');
    }
}
else {
    echo "Theres no Photo, Please Upload the photo";
}
?>