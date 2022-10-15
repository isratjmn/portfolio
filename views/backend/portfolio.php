<?php 
    $page_name = 'portfolio.php';
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
                        <h1> Portfolio Manager </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-7">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12 mt-5">
                                <?php
                                    $porto_select_query = "SELECT * FROM portfolios ORDER BY id DESC";
                                    $porto_query_output = mysqli_query($db_conn, $porto_select_query);
                                ?>
                                <div class="card-header mb-2">
                                    <h3 class="card-title fw-bolder fs-3">Portfolio List
                                        <span class="badge badge-primary badge-style-light fs-5">Total Users:<?=$porto_query_output->num_rows;?></span>
                                    </h3>
                                </div>
                                <div class="card-body">
                                <table id="user_list" class="table table-bordered table-light " style="width:100%">
                                    <thead>
                                        <tr>
                                            <th scope="col">Portfolio Name</th>
                                            <th scope="col">Portfolio Category</th>
                                            <th scope="col">Portfolio Details</th>
                                            <th scope="col">Portfolio Photo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <?php foreach ($porto_query_output as $portfolio) : ?>
                                        <tr>
                                            <td scope="row"><?=$portfolio['port_name']?></td>
                                            <td scope="row"><?=$portfolio['port_category']?></td>
                                            <td scope="row"><?=$portfolio['port_details']?></td>
                                            <td scope="row">
                                                <img src="upload/portfolio_img/<?=$portfolio['port_photo']?>" alt="image" width= "50" height="50">
                                            </td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th scope="col">Portfolio Name</th>
                                            <th scope="col">Portfolio Category</th>
                                            <th scope="col">Portfolio Details</th>
                                            <th scope="col">Portfolio Photo</th>
                                        </tr>
                                    </tfoot>
                                </table>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="col-xl-5">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5 pt-5">
                            <div class="col-xl-12">
                                <div class="card-header">
                                    <h3 class="card-title fs-3 fw-bolder">Add Portfolio</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add portfolio Users from below..</p>
                                    <?php if(isset($_SESSION['success'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['success'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['success']);
                                    ;?>
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form method="POST" action= "port_post.php" enctype="multipart/form-data">
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label">Portfolio Name</label>
                                                <input type="text" class="form-control" id= "signUpUsername" placeholder= "Enter Portfolio Name" name= "port_name">
                                            </div>
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label">Portfolio Category</label>
                                                <input type="text" class="form-control" id= "signUpUsername" placeholder= "Enter Category" name= "port_category">
                                            </div>
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label">Portfolio Details</label>
                                                <textarea name="port_details" id="summernote" class="form-control" cols="30" rows="4"></textarea>
                                            </div>
                                            <div class="auth-credentials m-b-xxl">
                                                <label for="signUpUsername" class="form-label">Portfolio Photo</label>
                                                <input type="file" class="form-control" id= "signUpUsername" placeholder= "Portfolio Photo" name= "port_photo">
                                            </div>
                                            <div class="auth-submit">
                                                <button type= "submit" class="btn btn-primary mb-6">Add Portfolio</button>    
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
<?php require_once 'footer.php'; ?>
<script>
    $(document).ready(function () {
    $('#user_list').DataTable();
    $('#summernote').summernote({
        placeholder: 'Hello stand alone ui',
        tabsize: 2,
        height: 120,
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']]
        ]
        });

});
</script>