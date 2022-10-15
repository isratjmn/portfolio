<?php 
    $page_name = 'settings.php';
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
                        <h2 class="text fw-bold">Settings Manager</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 m-auto">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5 pt-5">
                            <div class="col-xl-12">
                                <div class="card-header">
                                    <h3 class="card-title fs-3 fw-bolder">Settings</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add More Skills from below</p>
                                    <?php if(isset($_SESSION['success'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['success'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['success']);
                                    ;?>
                                    <?php if(isset($_SESSION['success_error'])):?>
                                        <div class="alert alert-danger">
                                            <?=$_SESSION['success_error'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['success_error']);
                                    ;?>
                                    
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form method="POST" action= "settings_up.php">
                                        <?php
                                            $sets_insert_query = "SELECT * FROM `settings`";
                                            $sets_query_output = mysqli_query($db_conn, $sets_insert_query);
                                        ?>
                                        <?php foreach ($sets_query_output as $set) :?>
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label"> <?=$set['setting_name']?> </label>
                                                <input type="text" class="form-control" placeholder= "<?=$set['setting_name']?>" name= "<?=$set['setting_name']?>" value="<?=$set['setting_value']?>">
                                            </div>
                                            <?php endforeach;?>
                                            <div class="auth-submit">
                                                <button type= "submit" class="btn btn-primary mb-6">Change Settings</button>    
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