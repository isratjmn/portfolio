<?php 
    $page_name = 'brands.php';
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
                        <h1>Brand Manager</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12">
                                <div class="card-header">
                                    <h3 class="card-title fs-2 fw-bolder ps-4">Brand List</h3>
                                    <p class="text m-t-md fs-6 fw-400 ps-4">All Brands</p>
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
                                                    $brands_select_query = "SELECT * FROM brands";
                                                    $brands_query_output = mysqli_query($db_conn, $brands_select_query);
                                                ?>
                                                <?php foreach($brands_query_output as $brand): ?>
                                                    <tr>
                                                        <td scope="row">
                                                            <img src="upload/brand_logos/<?=$brand['brand_logo_name']?>" alt="not found">
                                                        </td>
                                                        <td scope="row">
                                                            <!-- <a href="brands_del.php?id=<?=$brand['id']?>" type="button" class="btn btn-danger">Delete</a> -->
                                                            <button value="brands_del.php?id=<?=$brand['id']?>" class="btn btn-sm btn-danger brand_del_btn">Delete</button>
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
                                    <h3 class="card-title fs-2 fw-bolder">Add Brands</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add new brands from below Link</p>
                                    <?php if(isset($_SESSION['photo_success'])):?>
                                        <div class="alert alert-success">
                                            <?=$_SESSION['photo_success'];?>
                                        </div>
                                    <?php endif;
                                        unset($_SESSION['photo_success']);
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
                                        <form action="brands_add.php" method="POST" enctype="multipart/form-data">
                                            <div class="form-group">
                                                <input type="file" class="form-control form-control-user" placeholder="Brands Logo" name="brand_img">
                                            </div>
                                            <button type="submit" class="btn btn-info mt-4">Add Brand</button>
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
        $('.brand_del_btn').click(function(){
            var link = $(this).val();
            Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = link;
            }
            })
        }); 
    });
</script>
<?php if(isset($_SESSION['brand_del_status'])):?>
    <script>
        Swal.fire(
        'Done',
        'Brand Image Delete Successfully',
        'success'
        )
    </script>
<?php 
    endif;
    unset($_SESSION['brand_del_status']);
;?>