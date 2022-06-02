

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


CREATE DATABASE IF NOT EXISTS mapasinal;

USE mapasinal;

CREATE TABLE `circles` (
  `idCircle` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `latitude` varchar(200) NOT NULL,
  `longitude` varchar(200) NOT NULL,
  `raio` int(2) NOT NULL,
  `color` varchar(8) NOT NULL,
  `cor` varchar(200) NOT NULL,
  `horarioCadastro` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `operadora` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `circles` (`idCircle`, `idUser`, `latitude`, `longitude`, `raio`, `color`, `cor`, `horarioCadastro`, `operadora`) VALUES
(1, 1, '-23.32661545473785', '-47.863214018316505', 1, '#333', 'gray', '2022-05-31 15:21:00', 'vivo'),
(2, 1, '-23.32661545473785', '-47.863214018316505', 1, '#333', 'gray', '2022-05-31 00:13:20', ''),
(3, 0, '-23.331112909787446', '-47.860011017655786', 1, '#ff000', 'red', '2022-06-02 00:20:11', 'tim'),
(4, 1, '-23.331112909787446', '-47.860011017655786', 1, '#ff0000', 'red', '2022-06-02 00:23:14', 'tim');


CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'user1', 'user1@gmail.com', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'),
(2, 'user2', 'user2@gmail.com', '056eafe7cf52220de2df36845b8ed170c67e23e3'),
(3, 'user3', 'user3@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(4, 'user1', '1.1@1.1', '40bd001563085fc35165329ea1ff5c5ecbdbbeef'),
(5, 'rogerio', 'rogerio@gmail.com', '40bd001563085fc35165329ea1ff5c5ecbdbbeef');

ALTER TABLE `circles`
  ADD PRIMARY KEY (`idCircle`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `circles`
  MODIFY `idCircle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;
