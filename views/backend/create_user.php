<?php 
    $page_name = 'create_user.php';
    require_once 'header.php';
    require_once '../../db.php'; 
?>
<!------------ App Content Starts ------------>
<div class="app-content">
    <div class="content-wrapper"> 
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="page-description">
                        <h1> Create User </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12 mt-5">
                            <?php
                                $users_select_query = "SELECT * FROM users ORDER BY id DESC";
                                $users_query_output = mysqli_query($db_conn, $users_select_query);
                            ?>
                                <div class="card-header mb-2">
                                    <h3 class="card-title fw-bolder fs-2">Users List
                                        <span class="badge badge-primary badge-style-light fs-5">Total Users:<?=$users_query_output->num_rows;?></span>
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="user_list">
                                            <thead>
                                                <tr class="table table-light">
                                                    <th scope="col">Email ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Phone No</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php foreach($users_query_output as $user): ?>
                                                    <tr>
                                                        <td scope="row">
                                                            <?=$user['name']?>
                                                        </td>
                                                        <td scope="row">
                                                            <?=$user['email']?>
                                                        </td>
                                                        <td>
                                                            <?php if($user['image']): ?>
                                                            <img src="upload/profile_img/<?=$user['image']?>" alt="not found" width= "50" height="50">
                                                            <?php endif; ?>
                                                        </td>
                                                        <td>
                                                            <?=$user['phone_no']?>
                                                        </td>
                                                    </tr>
                                                <?php endforeach; ?>
                                            </tbody>
                                            <tfoot>
                                                <tr class="table table-light">
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email ID</th>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Phone No</th>
                                                </tr>
                                            </tfoot>
                                        </table>
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
                                    <h3 class="card-title fs-2 fw-bolder">Add User</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add New Users from below..</p>
                                    <?php if(isset($_SESSION['signup_successfully'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['signup_successfully'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['signup_successfully']);
                                    ;?>
                                    
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form method="POST" action= "register.php">
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label"> Name </label>
                                                <input type="text" class="form-control
                                                    <?php if(isset($_SESSION['name_error'])):?>
                                                        is-invalid
                                                    <?php endif?> 
                                                " id= "signUpUsername" placeholder= "Enter Name" name= "name" value="<?php if(isset($_SESSION['name'])) {echo $_SESSION['name'];}?>" >
                                                    <?php if(isset($_SESSION['name_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['name_error']?></div>
                                                    <?php endif?>
                                                <label for="signUpEmail" class="form-label m-t-md"> Email address </label>
                                                <input type="email" class="form-control
                                                    <?php if(isset($_SESSION['email_error'])):?>
                                                        is-invalid
                                                    <?php endif?>
                                                " id= "signUpEmail"  placeholder= "example@neptune.com" name= "email" value="<?php if(isset($_SESSION['email'])) {echo $_SESSION['email'];}?>" >
                                                    <?php if(isset($_SESSION['email_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['email_error']?> </div>
                                                    <?php endif?>
                                                <label for="signUpEmail" class="form-label m-t-md">Phone No</label>
                                                <input type="text" class="form-control
                                                    <?php if(isset($_SESSION['phone_no_error'])):?>
                                                        is-invalid
                                                    <?php endif?>
                                                " placeholder= "+017-XXXXXXXX" name= "phone_no" value="<?php if(isset($_SESSION['phone_no'])) {echo $_SESSION['phone_no'];}?>" >
                                                    <?php if(isset($_SESSION['phone_no_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['phone_no_error']?> </div> 
                                                    <?php endif?>
                                                <label for="signUpPassword" class="form-label m-t-md"> Password </label>
                                                <input type="password" class="form-control
                                                    <?php if(isset($_SESSION['password_error'])):?>
                                                        is-invalid
                                                    <?php endif?>
                                                " id= "signUpPassword"  placeholder= "Enter Password" name= "password" value="<?php if(isset($_SESSION['password'])) {echo $_SESSION['password'];}?>">
                                                    <?php if(isset($_SESSION['password_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['password_error']?> </div>
                                                    <?php endif?>
                                                <label for="signUpPassword" class="form-label m-t-md"> Confirm Password </label>
                                                <input type="password" class="form-control
                                                    <?php if(isset($_SESSION['confirm_pass_error'])):?>
                                                        is-invalid
                                                    <?php endif?>
                                                
                                                " id="signUpPassword"  placeholder="Confirm Password" name= "confirm_pass" value="<?php if(isset($_SESSION['confirm_pass'])) {echo $_SESSION['confirm_pass'];}?>">
                                                    <?php if(isset($_SESSION['different_pass_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['different_pass_error']?> </div>
                                                    <?php endif?>
                                                    <?php if(isset($_SESSION['confirm_pass_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['confirm_pass_error']?> </div>
                                                    <?php endif?>
                                                    <?php 
                                                        unset($_SESSION['name_error']);
                                                        unset($_SESSION['email_error']);
                                                        unset($_SESSION['phone_no_error']);
                                                        unset($_SESSION['password_error']);
                                                        unset($_SESSION['different_pass_error']);
                                                        unset($_SESSION['confirm_pass_error']);

                                                        unset($_SESSION['name']);
                                                        unset($_SESSION['email']);
                                                        unset($_SESSION['phone_no']);
                                                        unset($_SESSION['password']);
                                                        unset($_SESSION['confirm_pass']);
                                                    ?>
                                            </div>
                                            <div class="auth-submit">
                                                <button type= "submit" class="btn btn-primary mb-6" name= "btn"> Register Now </button>    
                                            </div>
                                            <div class="divider"></div>  
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
<script>
$(document).ready(function () {
    $('#user_list').DataTable();
});
</script>