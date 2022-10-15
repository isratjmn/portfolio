<?php require_once 'db.php'; ?>
<!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>kufa - Personal Portfolio</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" type="image/x-icon" href="assets/frontend/img/favicon.png">
    <!------------ CSS here ------------>
    <link rel="stylesheet" href="assets/frontend/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/frontend/css/animate.min.css">
    <link rel="stylesheet" href="assets/frontend/css/magnific-popup.css">
    <link rel="stylesheet" href="assets/frontend/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="assets/frontend/css/flaticon.css">
    <link rel="stylesheet" href="assets/frontend/css/slick.css">
    <link rel="stylesheet" href="assets/frontend/css/aos.css">
    <link rel="stylesheet" href="assets/frontend/css/default.css">
    <link rel="stylesheet" href="assets/frontend/css/style.css">
    <link rel="stylesheet" href="assets/frontend/css/responsive.css">
</head>
<body class="theme-bg">
    <!------------ Preloader ------------>
    <div id="preloader">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="object_one"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_three"></div>
            </div>
        </div>
    </div>
    <!------------ Preloader-end ------------>
    <!------------ Header-start ------------>
    <header>
        <div id="header-sticky" class="transparent-header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="main-menu">
                            <nav class="navbar navbar-expand-lg">
                                <a href="index.html" class="navbar-brand logo-sticky-none"><img src="assets/frontend/img/logo/logo.png" alt="Logo"></a>
                                <a href="index.html" class="navbar-brand s-logo-none"><img src="assets/frontend/img/logo/s_logo.png" alt="Logo"></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNav">
                                    <span class="navbar-icon"></span>
                                    <span class="navbar-icon"></span>
                                    <span class="navbar-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item active"><a class="nav-link" href="#home">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#about">about</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#service">service</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#portfolio">portfolio</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                                <div class="header-btn">
                                    <a href="#" class="off-canvas-menu menu-tigger"><i class="flaticon-menu"></i></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!------------ Offcanvas-start ------------>
        <div class="extra-info">
            <div class="close-icon menu-close">
                <button>
                    <i class="far fa-window-close"></i>
                </button>
            </div>
            <div class="logo-side mb-30">
                <a href="index-2.html">
                    <img src="assets/frontend/img/logo/logo.png" alt="photo" />
                </a>
            </div>
            <?php
                $address_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'address'";
                $phone_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'phone_no'";
                $email_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'email'";
            ?>
            <div class="side-info mb-30">
                <div class="contact-list mb-30">
                    <h4>Office Address</h4>
                    <p></span><?=mysqli_fetch_assoc(mysqli_query($db_conn, $address_select_query))['setting_value']?></p>
                </div>
                <div class="contact-list mb-30">
                    <h4>Phone Number</h4>
                    <p></span><?=mysqli_fetch_assoc(mysqli_query($db_conn, $phone_select_query))['setting_value']?></p>
                </div>
                <div class="contact-list mb-30">
                    <h4>Email Address</h4>
                    <p></span><?=mysqli_fetch_assoc(mysqli_query($db_conn, $email_select_query))['setting_value']?></p>
                </div>
            </div>
            <?php
                $fb_link_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'fb_link'";
                $twitter_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'twitter'";
                $linkedin_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'linkedin'";
            ?>
            <div class="social-icon-right mt-20">
                <a target= "_blank" href="<?=mysqli_fetch_assoc(mysqli_query($db_conn, $fb_link_select_query))['setting_value']?>"><i class="fab fa-facebook-f"></i></a>
                <a target= "_blank" href="<?=mysqli_fetch_assoc(mysqli_query($db_conn, $twitter_select_query))['setting_value']?>"><i class="fab fa-twitter"></i></a>
                <a target= "_blank" href="<?=mysqli_fetch_assoc(mysqli_query($db_conn, $linkedin_select_query))['setting_value']?>"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div class="offcanvas-overly"></div>
        <!------------ Offcanvas-end ------------>
    </header>
    <!------------ Header-end ------------>
    <!------------ Main-area ------------>
    <main>
    <!------------ Banner-area ------------>
        <section id="home" class="banner-area banner-bg fix">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-7 col-lg-6">
                        <div class="banner-content">
                            <h6 class="wow fadeInUp" data-wow-delay="0.2s">HELLO!</h6>
                            <?php
                                $owner_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'owner_name'";
                            ?>
                            <h2 class="wow fadeInUp" data-wow-delay="0.4s">I am <?=mysqli_fetch_assoc(mysqli_query($db_conn, $owner_select_query))['setting_value']?></h2>
                            <p class="wow fadeInUp" data-wow-delay="0.6s">I'm Will Smith, professional web developer with long time experience in this field​.</p>
                            <div class="banner-social wow fadeInUp" data-wow-delay="0.8s">
                                <?php
                                    $fb_link_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'fb_link'";
                                    $twitter_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'twitter'";
                                    $linkedin_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'linkedin'";
                                ?>
                                <ul>
                                    <li><a target= "_blank" href="<?=mysqli_fetch_assoc(mysqli_query($db_conn, $fb_link_select_query))['setting_value']?>"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a target= "_blank" href="<?=mysqli_fetch_assoc(mysqli_query($db_conn, $twitter_select_query))['setting_value']?>"><i class="fab fa-twitter"></i></a></li>
                                    <li><a target= "_blank" href="<?=mysqli_fetch_assoc(mysqli_query($db_conn, $linkedin_select_query))['setting_value']?>"><i class="fab fa-linkedin"></i></a></li>
                                    <li><a target= "_blank" href="#"><i class="fab fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                            <a download="" href="views/backend/upload/cv/moon.pdf" class="btn wow fadeInUp" data-wow-delay="1s">DOWNLOAD CV</a>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6 d-none d-lg-block">
                        <?php
                            $banner_select_query= "SELECT * FROM banners";
                            $banner_query_output = mysqli_query($db_conn, $banner_select_query);
                        ?>
                        <?php foreach($banner_query_output as $banner): ?>
                            <div class="banner-img text-right">
                                <img src="views/backend/upload/banner_photo/<?=$banner['banner_photo_name']?>" height="680" width="640" alt="photo">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            <div class="banner-shape"><img src="assets/frontend/img/shape/dot_circle.png" class="rotateme" alt="img"></div>
        </section>
        <!------------ Banner-area-end ------------>
        <!--------------- About-area -------------->
        <section id="about" class="about-area primary-bg pt-120 pb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <?php
                            $about_select_query= "SELECT * FROM about";
                            $about_query_output = mysqli_query($db_conn, $about_select_query);
                        ?>
                        <?php foreach($about_query_output as $item): ?>
                        <div class="about-img" style="margin-left:-200px;">
                            <!-- <img src="assets/frontend/img/banner/banner_img2.png" title="me-01" alt="me-01"> -->
                            <img src="views/backend/upload/about_image/<?=$item['about_photo_name']?>" height="680" width="650" alt="photo">
                        </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="col-lg-6 pr-90">
                        <div class="section-title mb-25">
                            <span>Introduction</span>
                            <h2>About Me</h2>
                        </div>
                        <div class="about-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, sed repudiandae odit deserunt, quas
                                quibusdam necessitatibus nesciunt eligendi esse sit non reprehenderit quisquam asperiores maxime
                                blanditiis culpa vitae velit. Numquam!</p>
                            <h3>Skills:</h3>
                        </div>
                        <?php
                            $skill_select_query= "SELECT * FROM skills";
                            $skill_query_output = mysqli_query($db_conn, $skill_select_query);
                        ?>
                        <?php foreach($skill_query_output as $skill): ?>
                        <!-- Education Item -->
                        <div class="education">
                            <div class="title fw-2"><?=$skill['skill_title']?></div>
                            <div class="line"></div>
                            <div class="location">
                                <span><?=$skill['skill_description']?></span>
                                <div class="progressWrapper">
                                    <div class="progress">
                                        <div class="progress-bar wow slideInLefts" data-wow-delay="0.2s" data-wow-duration="2s" role="progressbar" style="width: <?=$skill['skill_range']?>%;" aria-valuenow="<?=$skill['skill_range']?>" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Education Item -->
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </section>
        <!------------ About-area-end ------------>
        <!------------ Services-area ------------>
        <section id="service" class="services-area pt-120 pb-50">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8">
                        <div class="section-title text-center mb-70">
                            <span>WHAT WE DO</span>
                            <h2>Services and Solutions</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <?php
                        $services_select_query= "SELECT * FROM services WHERE status = 1";
                        $services_query_output = mysqli_query($db_conn, $services_select_query);
                    ?>
                    <?php foreach($services_query_output as $service): ?>
                        <div class="col-lg-4 col-md-6">
                            <div class="icon_box_01 wow fadeInLeft" data-wow-delay="0.2s">
                                <i class="<?=$service['service_icon']?>"></i>
                                <h3><?=$service['service_title']?></h3>
                                <p>
                                    <?=$service['service_desc']?>
                                </p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <!------------ Services-area-end ------------>
        <!------------- Portfolios-area ------------>
        <section id="portfolio" class="portfolio-area primary-bg pt-120 pb-90">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8">
                        <div class="section-title text-center mb-70">
                            <span>Portfolio Showcase</span>
                            <h2>My Recent Best Works</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <?php 
                        $port_select_query= "SELECT * FROM portfolios";
                        $port_query_output = mysqli_query($db_conn, $port_select_query);
                    ?>
                    <?php foreach ($port_query_output as $port) : ?>
                        <div class="col-lg-4 col-md-6 pitem">
                            <div class="speaker-box">
                                <div class="speaker-thumb">
                                    <img src="views/backend/upload/portfolio_img/<?=$port['port_photo']?>" alt="img">
                                </div>
                                <div class="speaker-overlay">
                                    <span><?=$port['port_category']?></span>
                                    <h4><a href="portfolio-single.php?id=<?=$port['id']?>"><?=$port['port_name']?></a></h4>
                                    <a href="portfolio-single.php?id=<?=$port['id']?>" class="arrow-btn">More information<span></span></a>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <!------------ Services-area-end ------------>
        <!---------------- Fact-area ---------------->
        <section class="fact-area">
            <div class="container">
                <div class="fact-wrap">
                    <div class="row justify-content-between">
                        <div class="col-xl-2 col-lg-3 col-sm-6 mx-5" style="display: flex; gap: 15rem;">
                            <?php
                                $achi_select_query= "SELECT * FROM achieves WHERE status = 1";
                                $achi_query_output = mysqli_query($db_conn, $achi_select_query);
                            ?>
                            <?php foreach($achi_query_output as $achie): ?>
                            <div class="fact-box text-center mb-50">
                                <div class="fact-icon">
                                    <i class="<?=$achie['achieve_icon']?>"></i>
                                </div>
                                <div class="fact-content">
                                    <h2><span class="count"><?=$achie['achieveCount']?></span></h2>
                                    <span><?=$achie['achieve_title']?></span>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        <!------------ Fact-area-end --------------->
        <!------------ Testimonial-area ------------>
        <section class="testimonial-area primary-bg pt-115 pb-115">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8">
                        <div class="section-title text-center mb-70">
                            <span>testimonial</span>
                            <h2>happy customer quotes</h2>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-xl-9 col-lg-10">
                        <div class="testimonial-active">
                            <?php 
                                $test_select_query= "SELECT * FROM testimonials";
                                $test_query_output = mysqli_query($db_conn, $test_select_query);
                            ?>
                            <?php foreach ($test_query_output as $testimonial):?>
                            <div class="single-testimonial text-center">
                                <div class="testi-avatar">
                                    <img src="views/backend/upload/test_img/<?=$testimonial['test_photo']?>" style="border-radius: 50%; height: 120px; width: 120px;" alt="image">
                                </div>
                                <div class="testi-content">
                                    <h4><span>“</span><?=$testimonial['test_reviews']?><span>”</span></h4>
                                    <div class="testi-avatar-info">
                                        <h5><?=$testimonial['client_name']?></h5>
                                        <span><?=$testimonial['designation']?></span>
                                    </div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------ Testimonial-area-end ------------>
        <!----------------- Brand-area ----------------->
        <div class="barnd-area pt-100 pb-100">
            <div class="container">
                <div class="row brand-active">
                    <?php
                        $brands_select_query = "SELECT * FROM brands";
                        $brands_query_output = mysqli_query($db_conn, $brands_select_query);
                    ?>
                    <?php foreach($brands_query_output as $brand): ?>
                    <div class="col-xl-2 mx-5">
                        <div class="single-brand">
                            <img src="views/backend/upload/brand_logos/<?=$brand['brand_logo_name']?>" alt="img">
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
        <!------------ Brand-area-end ------------>
        <!------------ Contact-area -------------->
        <section id="contact" class="contact-area primary-bg pt-120 pb-120">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="section-title mb-20">
                            <span>information</span>
                            <h2>Contact Information</h2>
                        </div>
                        <div class="contact-content">
                            <p>Event definition is - somthing that happens occurre How evesnt sentence. Synonym when an unknown printer took a galley.</p>
                            <h5>OFFICE IN<span> NEW YORK</span></h5>
                            <div class="contact-list">
                                <ul>
                                    <?php
                                        $address_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'address'";
                                        $phone_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'phone_no'";
                                        $email_select_query = "SELECT setting_value FROM settings WHERE setting_name = 'email'";
                                    ?>
                                    <li><i class="fas fa-map-marker"></i><span>Address :</span><?=mysqli_fetch_assoc(mysqli_query($db_conn, $address_select_query))['setting_value']?></li>
                                    <li><i class="fas fa-headphones"></i><span>Phone :</span><?=mysqli_fetch_assoc(mysqli_query($db_conn, $phone_select_query))['setting_value']?></li>
                                    <li><i class="fas fa-globe-asia"></i><span>e-mail :</span><?=mysqli_fetch_assoc(mysqli_query($db_conn, $email_select_query))['setting_value']?></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-form">
                            <form action="#">
                                <input type="text" placeholder="your name *">
                                <input type="email" placeholder="your email *">
                                <textarea name="message" id="message" placeholder="your message *"></textarea>
                                <button class="btn">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!------------ Contact-area-end ------------>
    </main>
    <!-------------- Main-area-end --------------->
    <!--------------- Footer ------------------>
    <footer>
        <div class="copyright-wrap">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12">
                        <div class="copyright-text text-center">
                            <p>Copyright© <span>Kufa</span> | All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!------------ Footer-end ------------>
    <!------------ JS here ------------>
    <script src="assets/frontend/js/vendor/jquery-1.12.4.min.js"></script>
    <script src="assets/frontend/js/popper.min.js"></script>
    <script src="assets/frontend/js/bootstrap.min.js"></script>
    <script src="assets/frontend/js/isotope.pkgd.min.js"></script>
    <script src="assets/frontend/js/one-page-nav-min.js"></script>
    <script src="assets/frontend/js/slick.min.js"></script>
    <script src="assets/frontend/js/ajax-form.js"></script>
    <script src="assets/frontend/js/wow.min.js"></script>
    <script src="assets/frontend/js/aos.js"></script>
    <script src="assets/frontend/js/jquery.waypoints.min.js"></script>
    <script src="assets/frontend/js/jquery.counterup.min.js"></script>
    <script src="assets/frontend/js/jquery.scrollUp.min.js"></script>
    <script src="assets/frontend/js/imagesloaded.pkgd.min.js"></script>
    <script src="assets/frontend/js/jquery.magnific-popup.min.js"></script>
    <script src="assets/frontend/js/plugins.js"></script>
    <script src="assets/frontend/js/main.js"></script>
    <!--Start of Tawk.to Script-->
    <script type="text/javascript">
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/6347e15837898912e96e68e0/1gf8cggtm';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
    </script>
    <!--End of Tawk.to Script-->
</body>
</html>