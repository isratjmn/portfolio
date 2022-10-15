<?php 
    $page_name = 'skills.php';
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
                        <h2 class="text fw-bold"> Skills Manager </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">  
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12 mt-5">
                                <?php
                                    $skills_select_query = "SELECT * FROM skills ORDER BY id DESC";
                                    $skills_query_output = mysqli_query($db_conn, $skills_select_query);
                                ?>
                                <div class="card-header mb-2">
                                    <h3 class="card-title fw-bolder fs-2">Skills details
                                        <span class="badge badge-primary badge-style-light fs-5">Total Users:<?=$skills_query_output -> num_rows;?></span>
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered" id="user_list">
                                            <thead>
                                                <tr class="table table-light">
                                                    <th scope="col">Skill Title</th>
                                                    <th scope="col">Skill Description</th>
                                                    <th scope="col">Skill Range</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php foreach($skills_query_output as $skill): ?>
                                                    <tr>
                                                        <td scope="row">
                                                            <?=$skill['skill_title']?>
                                                        </td>
                                                        <td>
                                                            <?=$skill['skill_description']?>
                                                        </td>
                                                        <td>
                                                            <?=$skill['skill_range']?>
                                                        </td>
                                                    </tr>
                                                <?php endforeach; ?>
                                            </tbody>
                                            <tfoot>
                                                <tr class="table table-light">
                                                    <th scope="col">Skill Title</th>
                                                    <th scope="col">Skill Description</th>
                                                    <th scope="col">Skill Range</th>
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
                                    <h3 class="card-title fs-3 fw-bolder">Add Skills</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add More Skills from below</p>
                                    <?php if(isset($_SESSION['added_successfully'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['added_successfully'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['added_successfully']);
                                    ;?>
                                    
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">

                                        <form method="POST" action= "skills_add.php">
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label">Skill Title</label>
                                                <input type="text" class="form-control" placeholder= "Skill Title" name= "skill_title">
                                                
                                                <label for="signUpUsername" class="form-label mt-3">Skill Description</label>
                                                <input type="text" class="form-control" placeholder= "Skill Description" name= "skill_description">
                                                
                                                <label for="customRange3" class="form-label mt-3">Skill Range</label>
                                                    <input type="range" class="form-range" min="0" max="100" step="10" value="1" id="myRange" name="skill_range">
                                            </div>
                                            <div class="auth-submit">
                                                <button type= "submit" class="btn btn-primary mb-6" name= "btn">Add Skill</button>    
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