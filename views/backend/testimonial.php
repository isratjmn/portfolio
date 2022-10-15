<?php 
    $page_name = 'testimonial.php';
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
                        <h2 class="text fw-bold">Testimonial Manager</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12 mt-5">
                                <?php
                                    $test_select_query = "SELECT * FROM testimonials ORDER BY id DESC";
                                    $test_query_output = mysqli_query($db_conn, $test_select_query);
                                ?>
                                <div class="card-header mb-2">
                                    <h3 class="card-title fw-bolder fs-3">Testimonial List
                                        <span class="badge badge-primary badge-style-light fs-5">Total Users:<?=$test_query_output -> num_rows;?></span>
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <table id="user_list" class="table table-bordered table-light " style="width:100%">
                                        <thead>
                                            <tr>
                                                
                                                <th>Testimonial Reviews</th>
                                                <th>Client Name</th>
                                                <th>Designation</th>
                                                <th>Testimonial Photo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php foreach ($test_query_output as $testimonial) : ?>
                                            <tr>
                                                <td><?=$testimonial['test_reviews']?></td>
                                                <td><?=$testimonial['client_name']?></td>
                                                <td><?=$testimonial['designation']?></td>
                                                <td>
                                                    <img src="upload/test_img/<?=$testimonial['test_photo']?>" alt="image" width= "70" height="70">
                                                </td>
                                            </tr>
                                            <?php endforeach; ?>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>testimonial Reviews</th>
                                                <th>Client Name</th>
                                                <th>Designation</th>
                                                <th>Testimonial Photo</th>
                                            </tr>
                                        </tfoot>
                                    </table>
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
                                    <h3 class="card-title fs-3 fw-bolder">Add Testimonial</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add new testimonial from below</p>
                                    <?php if(isset($_SESSION['photo_success'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['success'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['success']);
                                    ;?>
                                    <?php if(isset($_SESSION['photo_error'])):?>
                                        <div class="alert alert-danger">
                                            <?=$_SESSION['photo_error'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['photo_error']);
                                    ;?>
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form action="test_post.php" method="POST" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="file" class="form-control form-control-user" placeholder="Users Image" name="test_photo">
                                            </div>
                                            <div class="form-group m-t-md">
                                                <textarea class="form-control" placeholder="Review Text" rows="4" name="test_reviews" maxlength="150"></textarea>
                                            </div>
                                            <div class="form-group m-t-md">
                                                <input type="text" class="form-control form-control-user" placeholder="Client Name" name="client_name">
                                            </div>
                                            <div class="form-group m-t-md">
                                                <input type="text" class="form-control form-control-user" placeholder="Designation" name="designation">
                                            </div>
                                            <button type="submit" class="btn btn-info mt-4">Add Testimonial</button>
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
    var quill = new Quill('#quillArea', {
    theme: 'snow'
});
});
</script>