<?php 
    $page_name = 'achievement.php';
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
                        <h1> Achievements Manager </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12">
                                <div class="card-header">
                                    <h3 class="card-title fs-2 fw-bolder ps-4"> Achievements List </h3>
                                    <p class="text m-t-md fs-6 fw-400 ps-4"> Here we can listing Our Achievements. </p>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr class="table table-dark">
                                                    <th scope="col">Icon</th>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Count</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                    $achieve_select_query= "SELECT * FROM achieves";
                                                    $achieve_query_output = mysqli_query($db_conn, $achieve_select_query);
                                                ?>
                                                <?php foreach($achieve_query_output as $achieve): ?>
                                                    <tr class="text fw-bold">
                                                        <td scope="row"><?=$achieve['achieve_icon']?></td>
                                                        <td><?=$achieve['achieve_title']?></td>
                                                        <td><?=$achieve['achieveCount']?></td>
                                                        
                                                        <td>
                                                            <?php if ($achieve['status'] == 1): ?> 
                                                            <span class="badge bg-success">Show</span>
                                                            <?php else: ?> 
                                                            <span class="badge bg-danger">Hide </span>
                                                            <?php endif; ?> 
                                                        </td>
                                                        <td>
                                                            <a href="achie_edit.php?id=<?=$achieve['id']?>" type="button" class="btn btn-warning">Edit</a>
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
                                    <h3 class="card-title fs-2 fw-bolder">Add Achievements</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add new achievements from below Link</p>
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form action="achie_post.php" method="POST">
                                            <p class="text mt-3">Choose Icon from below List..</p>
                                            <div class="form-group m-t-md" style="height: 150px; overflow-y: scroll">
                                                <?php 
                                                require_once 'font_awesome.php';
                                                ?>
                                                <?php foreach ($icons as $icon): ?>
                                                <span class="badge text-dark p-2">
                                                    <input class="form-check-input" type="radio" name="achieve_icon" id="flexRadioDefault_<?=$icon?>" value="fa <?=$icon?>">
                                                    <label class="form-check-label p-2" for="flexRadioDefault_<?=$icon?>">
                                                        <i class="fa-2x fa <?=$icon?>"></i>
                                                    </label>
                                                </span>
                                                <?php endforeach; ?>
                                            </div>
                                            <div class="form-check form-switch m-t-md ps-5">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitch"
                                                value="1" name="status" checked>
                                                <label class="form-check-label" for="flexSwitch">Status (Show/Hide)</label>
                                            </div>
                                            <div class="form-group m-t-md">
                                                <input type="text" class="form-control form-control-user" placeholder="Achievement Counts" name="achieveCount">
                                            </div>
                                            <div class="form-group m-t-md">
                                                <input type="text" class="form-control form-control-user" placeholder="Achievement Title" name="achieve_title">
                                            </div>
                                            
                                            <button type="submit" class="btn btn-info mt-4">Add Achievements</button>
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