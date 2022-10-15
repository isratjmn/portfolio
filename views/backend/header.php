<?php
session_start();
if (!isset($_SESSION['s_email_id'])) {
    header('location: excess_denied.php');
}
require_once "../../db.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Responsive Admin Dashboard Template">
    <meta name="keywords" content="admin,dashboard">
    <meta name="author" content="stacks">
    <!------------ Boxicons CDN ------------->
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <!---------- Font Awesome CDN ------------>
    <link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' rel='stylesheet'>
    <!-- Include Datatables CSS -->
    <link href='https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css' rel='stylesheet'>
    <!-- Include Summernote CSS -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet"> -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
    
    <!------------ Title ------------->
    <title>Neptune Dashboard</title>
    <!------------ Styles ------------>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet">
    <link href="../../assets/backend/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../assets/backend/plugins/perfectscroll/perfect-scrollbar.css" rel="stylesheet">
    <link href="../../assets/backend/plugins/pace/pace.css" rel="stylesheet">  
    <!------------ Theme Styles ------------>
    <link href="../../assets/backend/css/main.min.css" rel="stylesheet">
    <link href="../../assets/backend/css/custom.css" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="32x32" href="../../assets/backend/images/neptune.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="../../assets/backend/images/neptune.png"/>

</head>
<body>
    <div class="app align-content-stretch d-flex flex-wrap">
        <div class="app-sidebar">
            <div class="logo">
                <a href="index.php" class="logo-icon"><span class="logo-text">Neptune</span></a>
                <div class="sidebar-user-switcher user-activity-online">
                    <a href="#">
                        <img src="../../assets/backend/images/avatars/avatar.png">
                        <span class="activity-indicator"></span>
                        <span class="user-info-text"> Chloe <br><span class="user-state-info">On a call</span></span>
                    </a>
                </div>
            </div>
            <div class="app-menu">
                <ul class="accordion-menu">
                    <li class="sidebar-title">Apps</li>
                    <li class="<?= ($page_name == 'dashboard.php'? 'active-page':'')?>">
                        <a href="dashboard.php" class="active"><i class="material-icons-two-tone">dashboard</i>Dashboard</a>
                    </li>
                    <li class="<?= ($page_name == 'profile.php'? 'active-page':'')?>">
                        <a href="profile.php"><i class="material-icons-two-tone">group_add</i> Profile </a>
                    </li>
                    <li class="<?= ($page_name == 'banner.php'? 'active-page':'')?>">
                        <a href="banner.php" class="active"><i class="material-icons-two-tone">add_a_photo</i>Banner</a>
                    </li>
                    <li class="<?= ($page_name == 'about.php'? 'active-page':'')?>">
                        <a href="about.php" class="active"><i class="material-icons-two-tone">face</i>About</a>
                    </li>
                    <li class="<?= ($page_name == 'services.php'? 'active-page':'')?>">
                        <a href="services.php"><i class="material-icons-two-tone">design_services</i> Services </a>
                    </li>
                    <li class="<?= ($page_name == 'create_user.php'? 'active-page':'')?>">
                        <a href="create_user.php"><i class="material-icons-two-tone">person_add</i> Create User </a>
                    </li>
                    <li class="<?= ($page_name == 'brands.php'? 'active-page':'')?>">
                        <a href="brands.php"><i class="material-icons-two-tone">star</i> Brands </a>
                    </li>
                    <li class="<?= ($page_name == 'portfolio.php'? 'active-page':'')?>">
                        <a href="portfolio.php"><i class="material-icons-two-tone">perm_media</i> Portfolio </a>
                    </li>
                    <li class="<?= ($page_name == 'skills.php'? 'active-page':'')?>">
                        <a href="skills.php"><i class="material-icons-two-tone">school</i> Skills </a>
                    </li>
                    <li class="<?= ($page_name == 'testimonial.php'? 'active-page':'')?>">
                        <a href="testimonial.php"><i class="material-icons-two-tone">folder_special</i> Testimonial </a>
                    </li>
                    <li class="<?= ($page_name == 'contact.php'? 'active-page':'')?>">
                        <a href="contact.php"><i class="material-icons-two-tone">contact_phone</i> Contact </a>
                    </li>
                    <li class="<?= ($page_name == 'settings.php'? 'active-page':'')?>">
                        <a href="settings.php"><i class="material-icons-two-tone">settings_applications</i> Settings </a>
                    </li>
                    <li>
                        <a href="achievement.php"><i class="material-icons-two-tone">workspace_premium</i>Achievements</a>
                    </li>
                    <li>
                        <a href="#"><i class="material-icons-outlined">inbox</i> Reserve <span class="badge rounded-pill badge-danger float-end">10</span></a>
                    </li>
                    <li>
                        <a href="#"><i class="material-icons-two-tone">star</i>Pages
                            <i class="material-icons has-sub-menu">keyboard_arrow_right</i>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="pricing.html">Pricing</a>
                            </li>
                            <li>
                                <a href="settings.html">Settings</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="material-icons-two-tone">view_day</i>Reserve
                            <i class="material-icons has-sub-menu">keyboard_arrow_right</i>
                        </a>
                        <ul class="sub-menu">
                            <li><a href="#">Transparent</a></li>
                            <li><a href="#">Large</a></li>
                            <li><a href="#">Colorful</a>
                            </li>
                        </ul>
                    </li>
                    <li class="sidebar-title">
                        Other
                    </li>
                    <li>
                        <a href="../../index.php" target="_blank"><i class="material-icons-two-tone">public</i>Visit Website</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="app-container">
            <div class="search">
                <form>
                    <input class="form-control" type="text" placeholder="Type here..." aria-label="Search">
                </form>
                <a href="#" class="toggle-search"><i class="material-icons">close</i></a>
            </div>
            <div class="app-header">
                <nav class="navbar navbar-light navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-nav" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link hide-sidebar-toggle-button" href="#"><i class="material-icons">first_page</i></a>
                                </li>
                                <li class="nav-item dropdown hidden-on-mobile">
                                    <a class="nav-link dropdown-toggle" href="#" id="addDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="material-icons">add</i>
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="addDropdownLink">
                                        <li><a class="dropdown-item" href="#">New Workspace</a></li>
                                        <li><a class="dropdown-item" href="#">New Board</a></li>
                                        <li><a class="dropdown-item" href="#">Create Project</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown hidden-on-mobile">
                                    <a class="nav-link dropdown-toggle" href="#" id="exploreDropdownLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="material-icons-outlined">explore</i>
                                    </a>
                                    <ul class="dropdown-menu dropdown-lg large-items-menu" aria-labelledby="exploreDropdownLink">
                                        <li>
                                            <h6 class="dropdown-header">Repositories</h6>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <h5 class="dropdown-item-title">Neptune iOS
                                                    <span class="badge badge-warning">1.0.2</span>
                                                    <span class="hidden-helper-text">switch<i class="material-icons">keyboard_arrow_right</i></span>
                                                </h5>
                                                <span class="dropdown-item-description">
                                                    </span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <h5 class="dropdown-item-title">Neptune Android
                                                    <span class="badge badge-info">dev</span>
                                                    <span class="hidden-helper-text">switch<i class="material-icons">keyboard_arrow_right</i></span>
                                                </h5>
                                                <span class="dropdown-item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                            </a>
                                        </li>
                                        <li class="dropdown-btn-item d-grid">
                                            <button class="btn btn-primary">Create new repository</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex">
                            <ul class="navbar-nav">
                                <li class="nav-item hidden-on-mobile">
                                    <a class="nav-link active" href="#">Applications</a>
                                </li>
                                <li class="nav-item hidden-on-mobile">
                                    <a class="nav-link" href="#">Reports</a>
                                </li>
                                <li class="nav-item hidden-on-mobile">
                                    <a class="nav-link" href="#">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link toggle-search" href="#"><i class="material-icons">search</i></a>
                                </li>
                                <li class="nav-item hidden-on-mobile">
                                    <a class="nav-link language-dropdown-toggle" href="#" id="languageDropDown" data-bs-toggle="dropdown">
                                        <img src="https://sellzone.store/wp-content/uploads/2022/01/women-fashion.png">
                                    </a>
                                        <ul class="dropdown-menu dropdown-menu-end language-dropdown">
                                            <li>
                                                <a class="dropdown-item" href="profile.php">
                                                    <h5><i class='bx bxs-user-circle'> My Profile </i></h5>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="logout.php">
                                                    <h5><i class='bx bx-power-off'> Logout </i></h5>
                                                </a>
                                            </li>
                                        </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>