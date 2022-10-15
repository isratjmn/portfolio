<?php 
    $page_name = 'profile.php';
    require_once 'header.php';
    $email_address= $_SESSION['s_email_id'];
    $select_query= "SELECT * FROM users WHERE email= '$email_address'";
    $select_query_output= mysqli_query($db_conn, $select_query);
    $select_query_output_array= mysqli_fetch_assoc($select_query_output);
?>
    <!------------ App Content Starts ------------>
    <div class="app-content">
        <div class="content-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="page-description">
                            <h1> Profile </h1>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card widget widget-stats">
                            <div class="card-body">
                                <div class="widget-stats-container d-flex">
                                    <?php if($select_query_output_array['image']): ?>
                                        <img src="upload/profile_img/<?=$select_query_output_array['image']?>" class="img mt-2" alt="avatar" width="80" height="80">
                                    <?php else: ?>
                                        <img src="https://png.pngtree.com/png-vector/20220609/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-gray-background-png-image_4847624.png" class="img mt-2" alt="avatar" width="80" height="80">
                                    <?php endif; ?>
                                    <div class="widget-stats-content flex-fill">
                                        <span class="widget-stats-title ms-3"> Name </span>
                                        <span class="widget-stats-amount ms-3 fs-5"><?=$select_query_output_array['name'];?></span>
                                        <span class="widget-stats-title ms-3"> Email </span>
                                        <span class="widget-stats-amount ms-3 fs-5">
                                            <?=$_SESSION['s_email_id']?> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-8">
                        <div class="card widget widget-stats-large">
                            <div class="row mb-5 pt-5">
                                <div class="col-xl-10">
                                    <div class="card-header">
                                        <h2 class="card-title fs-3 fw-bolder"> Change Password </h2>
                                        <p class="text m-t-md fs-6 fw-500"> Your password has expired & you need to change it before you Signin. </p>
                                        <?php if(isset($_SESSION['password_error'])):?>
                                        <div class="alert alert-danger">
                                            <?=$_SESSION['password_error'];?>
                                        </div>
                                        <?php 
                                            endif;
                                            unset($_SESSION['password_error']);
                                        ;?>
                                        <?php if(isset($_SESSION['password_success'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['password_success'];?>
                                        </div>
                                        <?php 
                                            endif;
                                            unset($_SESSION['password_success']);
                                        ;?>
                                        <div class="col-lg-12">
                                            <form action="reset_pass.php" method="POST">
                                                <div class="form-group m-t-md">
                                                    <input type="text" class="form-control form-control-user" placeholder="Current Password.." name="password">
                                                </div>
                                                <div class="form-group m-t-md">
                                                    <input type="text" class="form-control form-control-user" placeholder="New Password.." name="new_password">
                                                </div>
                                                <div class="form-group m-t-md">
                                                    <input type="text" class="form-control form-control-user" placeholder="Confirm Password.." name="confirm_password">
                                                </div>
                                                <button type="submit" class="btn btn-info mt-4"> Reset Password
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4">
                        <div class="card widget widget-stats-large">
                            <div class="row mb-5 pt-5">
                                <div class="col-xl-12">
                                    <div class="card-header">
                                        <h3 class="card-title fs-3 fw-bolder">Upload Photo</h3>
                                        <p class="text m-t-md fs-6 fw-400">Your can change or upload your photo.</p>
                                        <?php if(isset($_SESSION['photo_success'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['photo_success'];?>
                                        </div>
                                        <?php 
                                            endif;
                                            unset($_SESSION['photo_success']);
                                        ;?>
                                        <?php if(isset($_SESSION['photo_error'])):?>
                                        <div class="alert alert-danger">
                                            <?=$_SESSION['photo_error'];?>
                                        </div>
                                        <?php 
                                            endif;
                                            unset($_SESSION['photo_error']);
                                        ;?>
                                        <div class="col-lg-12">
                                            <form action="change_img.php" method="POST"
                                                    enctype="multipart/form-data">
                                                <div class="form-group m-t-md">
                                                    <input type="file" class="form-control form-control-user" placeholder="New Photo.." name="new_photo">
                                                </div>
                                                <p class=" text-small fw-bold m-t-md"> Choose Only: .jgeg, .jpg,.png, .svg </p>
                                                <button type="submit" class="btn btn-info m-t-md">Upload Photo</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!------------ App Content Ends -------------->
<?php 
    require_once 'footer.php';
?>