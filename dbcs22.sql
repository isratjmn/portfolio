-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2022 at 05:48 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcs22`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `about_photo_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `about_photo_name`) VALUES
(2, 'About-1665545747-50194.png');

-- --------------------------------------------------------

--
-- Table structure for table `achieves`
--

CREATE TABLE `achieves` (
  `id` int(11) NOT NULL,
  `achieve_icon` varchar(100) NOT NULL,
  `achieveCount` varchar(100) NOT NULL,
  `achieve_title` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `achieves`
--

INSERT INTO `achieves` (`id`, `achieve_icon`, `achieveCount`, `achieve_title`, `status`) VALUES
(1, 'fa fa-bookmark', '15', 'Years Of Experience', 1),
(2, 'fa fa-child', '1015', 'Our Clients', 1),
(5, 'fa fa-briefcase', '2000', 'Successful Projects', 1),
(6, 'fa fa-diamond', '2400', 'Working Hours', 1);

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `banner_photo_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `banner_photo_name`) VALUES
(18, 'Banner-1665156592-92275.png');

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `brand_logo_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`id`, `brand_logo_name`) VALUES
(8, '1663700665-20369.png'),
(9, '1663700671-60154.png'),
(12, '1663700743-22984.png'),
(13, '1663700749-41074.png'),
(14, '1663700756-59991.png'),
(15, '1664851934-14115.png'),
(18, '1664851997-56186.png');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(1, 'sakomali', 'sozokuz@mailinator.com', 'Porro ut architecto non quasi tenetur sunt'),
(2, 'fuqicy', 'hosufybu@mailinator.com', 'Dolorem laboriosam quia esse maxime lorem earum dolor quibusdam esse'),
(3, 'fypuvydimo', 'fijopi@mailinator.com', 'Odit iure officia minus voluptatum tenetur quam unde perferendis'),
(4, 'zyfah', 'kacaqe@mailinator.com', 'Qui dolor quaerat unde laboris quaerat non sunt in quas et'),
(5, 'wyfamybybi', 'bugeh@mailinator.com', 'Aut iure cupidatat quia porro quos maiores id'),
(6, 'buxevy', 'xyde@mailinator.com', 'Sunt in nisi est eligendi mollitia laboris vitae'),
(7, 'Moonmoon', 'xedoqydit@mailinator.com', 'Nam fugit eiusmod praesentium incidunt ipsum proident sunt et dolor ea irure qui eius');

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE `portfolios` (
  `id` int(11) NOT NULL,
  `port_name` varchar(100) NOT NULL,
  `port_category` varchar(100) NOT NULL,
  `port_details` longtext NOT NULL,
  `port_photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `port_name`, `port_category`, `port_details`, `port_photo`) VALUES
(21, 'Lorem Ipsum', 'Arts ', '<h6><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\r\nobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\r\nnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\r\ntenetur error, harum nesciunt ipsum debitis quas aliquid.</b></h6><ul><li><b> Reprehenderit,\r\nquia. </b></li><li><b>Quo neque error </b></li><li><b>repudiandae fuga? </b></li></ul><p style=\"text-align: left;\"><b>Ipsa laudantium molestias eos \r\nsapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\r\nrecusandae alias error harum maxime adipisci amet laborum. Perspiciatis \r\nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \r\nquibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \r\nfugiat, temporibus enim commodi iusto libero magni deleniti quod quam \r\nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\r\ndoloremque. Quaerat provident commodi consectetur veniam</b></p><ul><li style=\"text-align: left;\"><b> similique ad \r\nearum</b></li><li style=\"text-align: left;\"><b> omnis ipsum saepe, </b></li><li style=\"text-align: left;\"><b>voluptas, hic voluptates </b></li><li style=\"text-align: left;\"><b>pariatur est explicabo \r\nfugiat, </b></li></ul><p><b>dolorum eligendi quam cupiditate excepturi mollitia maiores labore \r\nsuscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium\r\nmodi minima sunt esse temporibus sint culpa, recusandae aliquam numquam \r\ntotam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam \r\nquasi aliquam eligendi, placeat qui corporis!</b><br></p>', 'Portfolio-1664399295-36245.jpg'),
(23, 'Lorem Ipsum', 'Suxywa', '<h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\r\nmolestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\r\nnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\r\noptio, eaque rerum! Provident sor harum maxime adipisci amet laborum. Perspiciatis \r\nminima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \r\nquibusdam sed amet tempora. </h6><ul><li>Sit laborum ab,</li><li> eius fugit doloribus</li><li> tenetur \r\nfugiat, </li></ul><h6>temporibus enim commodi iusto libero magni deleniti quod quam \r\nconsequuntur! Commodi minima excepturi repudiandae velit hic maxime\r\ndoloremque. Quaerat provident commodi consectetur veniam similique ad \r\nearum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo&nbsp;</h6>', 'Portfolio-1664400072-26238.jpg'),
(26, 'fypajyxyz', 'xolop', '<span style=\"border-color: rgb(225, 231, 237) !important;\">ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!</span>', 'Portfolio-1664852748-15647.jpg'),
(27, 'Jaxavafi', 'Roxuhujuzu', '<p><span style=\"border-color: rgb(225, 231, 237) !important;\">ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!</span></p><p><span style=\"border-color: rgb(225, 231, 237) !important;\">ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!</span></p><ul><li><span style=\"border-color: rgb(225, 231, 237) !important;\">ratione voluptas quod </span></li><li><span style=\"border-color: rgb(225, 231, 237) !important;\">exercitationem fuga. </span></li><li><span style=\"border-color: rgb(225, 231, 237) !important;\">Possimus quis earum </span></li><li><span style=\"border-color: rgb(225, 231, 237) !important;\">v</span>eniam quasi aliquam eligendi, </li><li>placeat qui corporis!</li></ul><p><span style=\"border-color: rgb(225, 231, 237) !important;\">eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil</span><br></p>', 'Portfolio-1664853077-43381.jpg'),
(28, 'cirobasy', 'vuremajyq', '<h6 style=\"color: rgb(0, 0, 0); border-color: rgb(225, 231, 237) !important;\"><span style=\"font-weight: 600; border-color: rgb(225, 231, 237) !important;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident&nbsp; debitis quas aliquid.</span></h6><h6 style=\"color: rgb(0, 0, 0); border-color: rgb(225, 231, 237) !important;\"><span style=\"font-weight: 600; border-color: rgb(225, 231, 237) !important;\"><br></span></h6><ul style=\"color: rgb(0, 0, 0); font-family: Poppins, sans-serif; border-color: rgb(225, 231, 237) !important;\"><li style=\"border-color: rgb(225, 231, 237) !important;\"><span style=\"font-weight: 600; border-color: rgb(225, 231, 237) !important;\">Reprehenderit, quia.</span></li><li style=\"border-color: rgb(225, 231, 237) !important;\"><span style=\"font-weight: 600; border-color: rgb(225, 231, 237) !important;\">Quo neque error</span></li><li style=\"border-color: rgb(225, 231, 237) !important;\"><span style=\"font-weight: 600; border-color: rgb(225, 231, 237) !important;\">repudiandae fuga?</span></li></ul><p style=\"border-color: rgb(225, 231, 237) !important;\"><span style=\"font-weight: 600; border-color: rgb(225, 231, 237) !important;\"><br></span></p><p style=\"color: rgb(0, 0, 0); font-family: Poppins, sans-serif; border-color: rgb(225, 231, 237) !important;\"><span style=\"font-weight: 600; border-color: rgb(225, 231, 237) !important;\">Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.</span></p>', 'Portfolio-1664853316-98562.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service_title` varchar(100) NOT NULL,
  `service_desc` text NOT NULL,
  `service_icon` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_title`, `service_desc`, `service_icon`, `status`) VALUES
(1, 'Brochure Designer', 'Brochures can be a convenient, concise way of communicating information about an upcoming event concerning your company or cause.', 'fa fa-align-right', 1),
(2, 'Node.js developer', 'Node.js is a popular JavaScript tool for developers who need to write seamless, effective code quickly. ', 'fa fa-anchor', 1),
(3, 'Pattern Designer', 'Essentially a surface pattern designer is someone who creates designs that are usually in a seamless and technical pattern repeat.', 'fa fa-android', 0),
(4, 'E-commerce ', 'E-commerce marketing is the method of increasing brand awareness and conversions for a company that is exclusively online. ', 'fa fa-shopping-cart', 1),
(5, 'Velit magnain asper', 'Sit modi nemo incididunt ullamco repellendus Error', 'fa fa-arrows-alt', 1),
(6, 'Atqueet quisquamno', 'Quas amet blanditiis ullamco qui necessitatibus non harum irure', 'fa fa-database', 1),
(7, 'Deseruntnobis volup', 'Officiis omnis mollitia eligendi incidunt', 'fa fa-cogs', 1);

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `setting_name` varchar(100) NOT NULL,
  `setting_value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `setting_name`, `setting_value`) VALUES
(10, 'address', '147, Camellia Street Suite 600, Magnolia Springs, AL 365'),
(12, 'email', 'magnoliaspringslibrary.org'),
(14, 'phone_no', '+1 251-965-2305'),
(15, 'about_me', 'Podcast Marketing '),
(16, 'owner_name', 'Julie Jane'),
(17, 'fb_link', 'https://www.facebook.com/rakibTausif'),
(18, 'twitter', 'https://twitter.com/mnisrat_j'),
(19, 'linkedin', 'https://www.linkedin.com/in/israt-moonmoon-92a06542/');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `skill_title` varchar(100) NOT NULL,
  `skill_description` text NOT NULL,
  `skill_range` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `skill_title`, `skill_description`, `skill_range`) VALUES
(2, 'CSS', 'Dolor praesentium', 70),
(7, 'PHP', 'Veniam quos evenie', 90),
(9, 'JS', 'Nisi esteum cillum ', 80),
(13, 'Python', 'Intermediate', 61),
(14, 'C++', 'Initial', 11),
(15, 'BS5', 'Advance', 90);

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL,
  `test_reviews` text NOT NULL,
  `client_name` varchar(100) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `test_photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `test_reviews`, `client_name`, `designation`, `test_photo`) VALUES
(4, 'Eu totam sint dolores molestiae eos dolor est delectus ipsam ea laboriosam at id non anim\r\nEu totam sint dolores molestiae eos dolor est delectus ipsam', 'Halla Hansen', 'Mollitia consequuntu', 'testimonial-1664306039-12567.jpg'),
(5, 'Minima consectetur numquam accusantium velit nihil consequatura incidunt Minima consectetur numquam accusantium velit nihil consequatura incidunt', 'Beatrice Weaver', 'Enimsed similique', 'testimonial-1664306165-47477.jpg'),
(6, 'Adipisicing voluptates neque eum rem magnam esse ut minim incidunt nihil est amet Adipisicing voluptates neque eum rem magnam esse ut minim incidunt n', 'Allen Berry', 'Voluptatem Dolore', 'testimonial-1664306233-50892.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `phone_no` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `image`, `phone_no`) VALUES
(1, 'mamod', 'roty@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', '1.jpg', ''),
(2, 'gixusekad', 'gugip@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, ''),
(3, 'hinoju', 'zufygo@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, ''),
(4, 'macywicas', 'huwuqotak@mailinator.com', 'f5bb0c8de146c67b44babbf4e6584cc0', '4.jpg', ''),
(5, 'bekoqus', 'wowizafaf@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', '5.png', ''),
(6, 'nynowyq', 'qyzuk@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, ''),
(7, 'mogivak', 'panif@mailinator.com', 'f5bb0c8de146c67b44babbf4e6584cc0', NULL, ''),
(9, 'duzumilol', 'giqaxatisy@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, ''),
(10, 'tufibucy', 'raqudymyg@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(11, 'habufutec', 'qynir@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(12, 'kepuv', 'vuse@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(13, 'vutizod', 'toxawudid@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, ''),
(14, 'julux', 'denifi@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, ''),
(15, 'gurif', 'dysafa@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(16, 'noqufolalu', 'vehy@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(17, 'qaxogavy', 'nenexe@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(18, 'cezojipeqe', 'lovohi@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(19, 'quvuw', 'zuzexog@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(20, 'jecirybaba', 'lyme@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(21, 'veralazowo', 'zamewyheh@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(22, 'israt jahan', 'mnisrat.j@gmail.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, ''),
(23, 'modyfyqeq', 'patyxyxiqu@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', '23.jpg', '+1 (701) 928-8197'),
(24, 'wesomej', 'wapo@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (876) 802-5884'),
(25, 'israt jahan', 'sdfsdgsdgdgd@gmail.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '01733577248'),
(26, 'bogybel', 'kahu@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (479) 969-8361'),
(27, 'kydojecum', 'netapabe@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (753) 947-5112'),
(28, 'qyfyp', 'xowohugid@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '01733577248'),
(29, 'fypyza', 'lywicyvix@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '01714065025'),
(30, 'cinajuq', 'mizuxisy@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, '01733577248'),
(31, 'vutopu', 'hevofa@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (166) 787-4381'),
(32, 'cyhitin', 'jese@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (238) 275-8997'),
(33, 'melynep', 'darycoxiq@mailinator.com', '579d9ec9d0c3d687aaa91289ac2854e4', NULL, '+1 (738) 996-9569'),
(34, 'laxynuf', 'pivim@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (812) 257-2063'),
(35, 'hypakihi', 'daxu@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (912) 365-6504'),
(36, 'pokidewy', 'hututu@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (429) 755-2657'),
(37, 'moonmoon', 'kasejypeve@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (683) 379-1341'),
(38, 'Tabassum', 'jyjubal@mailinator.com', 'f3ed11bbdb94fd9ebdefbaf646ab94d3', NULL, '+1 (983) 246-4937');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `achieves`
--
ALTER TABLE `achieves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `achieves`
--
ALTER TABLE `achieves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
