<?php 
    $page_name = 'contact.php';
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
                        <h1> Contact Information </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="card widget widget-stats-large">    
                        <div class="row mb-5">
                            <div class="col-xl-12 mt-5">
                                <?php
                                    $con_select_query = "SELECT * FROM contact ORDER BY id DESC";
                                    $con_query_output = mysqli_query($db_conn, $con_select_query);
                                ?>
                                <div class="card-header mb-2">
                                    <h3 class="card-title fw-bolder fs-2">Contact List
                                        <span class="badge badge-primary badge-style-light fs-5">Total Users:<?=$con_query_output->num_rows;?></span>
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="user_list">
                                            <thead>
                                                <tr class="table table-light">
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Message</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php foreach($con_query_output as $conta): ?>
                                                    <tr>
                                                        <td scope="row">
                                                            <?=$conta['name']?>
                                                        </td>
                                                        <td scope="row">
                                                            <?=$conta['email']?>
                                                        </td>
                                                        <td>
                                                            <?=$conta['message']?>
                                                        </td>
                                                    </tr>
                                                <?php endforeach; ?>
                                            </tbody>
                                            <tfoot>
                                                <tr class="table table-light">
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Message</th>
                                                    
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
                                    <h3 class="card-title fs-2 fw-bolder">Add Contacts</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add New Contacts from below</p>
                                    <?php if(isset($_SESSION['create_successfully'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['create_successfully'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['create_successfully']);
                                    ;?>
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form method="POST" action= "con_post.php">
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label"> Name </label>
                                                <input type="text" class="form-control
                                                    <?php if(isset($_SESSION['name_error'])):?>
                                                        is-invalid
                                                    <?php endif?> 
                                                " id= "signUpUsername" placeholder= "Your Name" name= "name" value="<?php if(isset($_SESSION['name'])) {echo $_SESSION['name'];}?>" >
                                                    <?php if(isset($_SESSION['name_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['name_error']?> </div>
                                                    <?php endif?>
                                                <label for="signUpEmail" class="form-label m-t-md"> Email address </label>
                                                <input type="email" class="form-control
                                                    <?php if(isset($_SESSION['email_error'])):?>
                                                        is-invalid
                                                    <?php endif?>
                                                " id= "signUpEmail"  placeholder= "Your Email" name= "email" value="<?php if(isset($_SESSION['email'])) {echo $_SESSION['email'];}?>" >
                                                    <?php if(isset($_SESSION['email_error'])):?>
                                                    <div class="text-danger form-text"> <?=$_SESSION['email_error']?> </div>
                                                    <?php endif?>
                                                    <label for="signUpEmail" class="form-label m-t-md"> Message </label>
                                                    <textarea class="form-control
                                                        <?php if(isset($_SESSION['message_error'])):?>
                                                            is-invalid
                                                        <?php endif?> 
                                                        " placeholder="Your Message" rows="4" name="message" maxlength="150" value="<?php if(isset($_SESSION['message'])) {echo $_SESSION['message'];}?>">
                                                    </textarea>
                                                    <?php 
                                                        unset($_SESSION['name_error']);
                                                        unset($_SESSION['email_error']);
                                                        unset($_SESSION['message_error']);
                                                        
                                                        unset($_SESSION['name']);
                                                        unset($_SESSION['email']);
                                                        unset($_SESSION['message']);
                                                    ?>
                                            </div>
                                            <div class="auth-submit">
                                                <button type= "submit" class="btn btn-primary mb-6" name= "btn">Add Contacts</button>    
                                            </div>
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