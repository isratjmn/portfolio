<?php 
    $page_name= 'services.php';
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
                        <h1> Manages Services </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-8">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5">
                            <div class="col-xl-12">
                                <div class="card-header">
                                    <h3 class="card-title fs-3 fw-bolder ps-4"> Service List </h3>
                                    <p class="text m-t-md fs-6 fw-400 ps-4"> Here we can listing Our Services. </p>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr class="table table-dark">
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Icon</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                    $services_select_query= "SELECT * FROM services";
                                                    $services_query_output = mysqli_query($db_conn, $services_select_query);
                                                ?>
                                                <?php foreach($services_query_output as $service): ?>
                                                    <tr>
                                                        <td scope="row"><?=$service['service_title']?></td>
                                                        <td><?=$service['service_desc']?></td>
                                                        <td><i class="<?=$service['service_icon']?>"></i></td>
                                                        <td>
                                                            <?php if ($service['status'] == 1): ?> 
                                                            <span class="badge bg-success">Show</span>
                                                            <?php else: ?> 
                                                            <span class="badge bg-danger">Hide </span>
                                                            <?php endif; ?> 
                                                        </td>
                                                        <td>
                                                            <a href="serv_edit.php?id=<?=$service['id']?>" type="button" class="btn btn-warning">Edit</a>
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
                                    <h3 class="card-title fs-3 fw-bolder">Add Services</h3>
                                    <p class="text m-t-md fs-6 fw-400">You can add new Service from below Link</p>
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form action="services_post.php" method="POST">
                                            <div class="form-group m-t-md">
                                                <input type="text" class="form-control form-control-user" placeholder="Service Title" name="service_title">
                                            </div>
                                            <div class="form-group m-t-md">
                                                <textarea class="form-control" placeholder="Service Description" rows="4" name="service_desc" maxlength="150"></textarea>
                                            </div>
                                            <p class="text mt-3">Choose Icon from below List..</p>
                                            <div class="form-group m-t-md" style="height: 150px; overflow-y: scroll">
                                                <?php 
                                                require_once 'font_awesome.php';
                                                ?>
                                                <?php foreach ($icons as $icon): ?>
                                                <span class="badge text-dark p-2">
                                                    <input class="form-check-input" type="radio" name="service_icon" id="flexRadioDefault_<?=$icon?>" value="fa <?=$icon?>">
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
                                            <button type="submit" class="btn btn-info mt-4">Add Service</button>
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