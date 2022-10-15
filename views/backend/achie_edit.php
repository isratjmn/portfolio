<?php 
    $page_name= 'achie_edit.php';
    require_once 'header.php';
    require_once '../../db.php'; 
    $id = $_GET['id'];
    // Select Query
    $achieve_query = "SELECT * FROM achieves Where id = $id";
    $achieve_query_output = mysqli_query($db_conn, $achieve_query);
    $achieve_output_assoc = mysqli_fetch_assoc($achieve_query_output);
    
?>
<!------------ App Content Starts ------------>
<div class="app-content">
    <div class="content-wrapper">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="page-description">
                        <h1> Achievements Update/ Edit Manager </h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5 m-auto">
                    <div class="card widget widget-stats-large">
                        <div class="row mb-5 pt-4">
                            <div class="col-xl-12">
                                <div class="card-header">
                                    <h3 class="card-title fs-2 fw-bolder">Achievements Update- <?=$achieve_output_assoc['achieve_title']?></h3>
                                    <p class="text m-t-md fs-6 fw-400">You can Edit /Update from below..</p>
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-12">
                                        <form action="achie_update.php" method="POST">
                                            <input type="hidden" name="achieve_id" value="<?=$id?>">
                                            <p class="text fw-bold mt-3">Choose Icon from below List: </p>
                                            <div class="form-group m-t-md" style="height: 150px; overflow-y: scroll">
                                            <?php 
                                                require_once 'font_awesome.php';
                                            ?>
                                            <?php foreach ($icons as $icon): ?>
                                                <span class="badge text-dark">
                                                    <input <?=($achieve_output_assoc['achieve_icon'] == 'fa '. $icon) ? 'checked' : ''?> class="form-check-input" type="radio" name="achieve_icon" id="flexRadioDefault_<?=$icon?>" value="fa <?=$icon?>">
                                                    <label class="form-check-label p-2" for="flexRadioDefault_<?=$icon?>">
                                                        <i class="fa-2x fa <?=$icon?>"></i>
                                                    </label>
                                                </span>
                                            <?php endforeach; ?>    
                                            </div>
                                            <div class="form-check form-switch m-t-md ps-5">
                                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitch"
                                                value="1" name="status"<?=($achieve_output_assoc['status'] == 1) ? 'checked' : '' ?>>
                                                <label class="form-check-label" for="flexSwitch">Status (Show/Hide)</label>
                                            </div> 
                                            <div class="form-group m-t-md">
                                                <input type="text" class="form-control form-control-user" placeholder="Achievement Counts" name="achieveCount" value="<?=$achieve_output_assoc['achieveCount']?>">
                                            </div>
                                            <div class="form-group m-t-md">
                                                <input type="text" class="form-control form-control-user" placeholder="Achievement Title" name="achieve_title" value="<?=$achieve_output_assoc['achieve_title']?>">
                                            </div>
                                            <button type="submit" class="btn btn-info mt-4">Update Achievements</button>
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