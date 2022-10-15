<?php 
    $page_name = 'about.php';
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
                        <h1>About</h1>
                    </div>
                </div>
            </div>
            <div class="row m-auto">
                <div class="col-xl-7">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12 mt-5">
                            <?php
                                $users_select_query = "SELECT * FROM users ORDER BY id DESC";
                                $users_query_output = mysqli_query($db_conn, $users_select_query);
                            ?>
                                <div class="card-header mb-2">
                                    <h3 class="card-title fw-bolder fs-3">About Image List</h3>
                                </div>
                                <div class="card-body">
                                <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr class="table table-dark">
                                                    <th scope="col">Logo</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                    $about_select_query = "SELECT * FROM about";
                                                    $about_query_output = mysqli_query($db_conn, $about_select_query);
                                                ?>
                                                <?php foreach($about_query_output as $item): ?> 
                                                    <tr>
                                                        <td scope="row">
                                                            <img src="upload/about_image/<?=$item['about_photo_name']?>" height="120" width="150" alt="image">
                                                        </td>
                                                        <td scope="row">
                                                            <a href="about_del.php?id=<?=$item['id']?>" type="button" class="btn btn-danger">Delete</a>
                                                        </td>
                                                    </tr>
                                                <?php endforeach; ?>
                                            </tbody>
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
                                    <h3 class="card-title fs-3 fw-bolder">Add Image</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add New Photo from below.</p>
                                    <?php if(isset($_SESSION['photo_success'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['photo_success'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['photo_success']);
                                    ;?>
                                    
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form action="about_post.php" method="POST" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="file" class="form-control form-control-user" placeholder="About Image" name="about_photo">
                                            </div>
                                            <button type="submit" name="submit" class="btn btn-info mt-4">Add Image</button>
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