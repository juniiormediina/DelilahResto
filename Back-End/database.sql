/* Se crea la base de datos */

CREATE DATABASE `delilah_resto` /*!40100 DEFAULT CHARACTER SET utf8mb4 */ /*!80016 DEFAULT ENCRYPTION='N' */;

/* Se crean las tablas relacionadas al proyecto */

DROP TABLE IF EXISTS `delilah_resto`.`user`;
CREATE TABLE `delilah_resto`.`user`
(
    `id` int NOT NULL AUTO_INCREMENT,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `phone` varchar(15) NOT NULL,
    `address` varchar(100) NOT NULL,
    `email` varchar(50) NOT NULL,
    `password` varchar(255) NOT NULL,
    `profile` varchar(50) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `delilah_resto`.`product`;
CREATE TABLE `delilah_resto`.`product` 
(
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `description` varchar(255) NOT NULL,
    `type` varchar(20) NOT NULL,
    `price` varchar(20) NOT NULL,
    `image` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `delilah_resto`.`requests`;
CREATE TABLE `delilah_resto`.`requests` 
(
    `id` int NOT NULL AUTO_INCREMENT,
    `status` varchar(50) NOT NULL,
    `Payment_method` varchar(30) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    `userId` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `userId` (`userId`),
    CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `delilah_resto`.`order`;
CREATE TABLE `delilah_resto`.`order` 
(
    `quantity` int NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    `productId` int NOT NULL,
    `requestId` int NOT NULL,
    PRIMARY KEY (`productId`,`requestId`),
    KEY `requestId` (`requestId`),
    CONSTRAINT `order_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `order_ibfk_2` FOREIGN KEY (`requestId`) REFERENCES `requests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


/* Se ingresa informacion minima a las tablas para el funcionamiento */

INSERT INTO `delilah_resto`.`user`
    (`id`,
    `firstname`,
    `lastname`,
    `phone`,
    `address`,
    `email`,
    `password`,
    `profile`)
VALUES
    ('1','Fulano','Zutano','3002552505','Cl 1 # 2 - 3, Medellin','fulano@correo.com','$2a$10$CAaRPazBdzqwJ1fcXHnse.hgVbwVvrqvZrcZ.7lmWnFXg33vMerSG','Administrator'),
    ('3','Perencejo','Zutano','3002552505','Cl 1 # 2 - 3, Medellin','perencejo@correo.com','$2a$10$3T/c1T14qZoPMtXj7atp0u.86ylw9qNT4PSN49Bhx4h/CNtMfJlsC','User');


INSERT INTO `delilah_resto`.`product`
(`id`,
`name`,
`description`,
`type`,
`price`,
`image`)
VALUES
    ('1', 'Pizza', 'Margarita', '1', '30', 'no disponible'),
    ('2', 'Pizza', 'Hawaina', '2', '20', 'no disponible'),
    ('3', 'Pizza', 'Napolitana', '3', '30', 'no disponible'),
    ('4', 'Pizza', 'Cuatro Quesos', '4', '35', 'no disponible'),
    ('5', 'Pizza', 'Romana', '5', '30', 'no disponible');

INSERT INTO `delilah_resto`.`requests`
    (`id`,
    `status`,
    `Payment_method`,
    `createdAt`,
    `updatedAt`,
    `userId`)
VALUES
    ('1','nuevo','Efectivo','2020-10-28 00:50:48','2020-10-28 01:38:03','1'),
    ('2','nuevo','Tarjeta de Credito','2020-10-28 00:50:48','2020-10-28 01:38:03','1'),
    ('3','nuevo','Efectivo','2020-10-28 00:50:48','2020-10-28 01:38:03','1'),
    ('4','nuevo','Tarjeta de Debito','2020-10-28 00:50:48','2020-10-28 01:38:03','1'),
    ('5','nuevo','Efectivo','2020-10-28 00:50:48','2020-10-28 01:38:03','1');

INSERT INTO `delilah_resto`.`order`
    (`quantity`,
    `createdAt`,
    `updatedAt`,
    `productId`,
    `requestId`)
VALUES
    ('3','2020-10-28 03:19:03','2020-10-28 03:19:03','1','1'),
    ('3','2020-10-28 03:19:03','2020-10-28 03:19:03','3','2'),
    ('2','2020-10-28 03:19:03','2020-10-28 03:19:03','5','3'),
    ('1','2020-10-28 03:19:03','2020-10-28 03:19:03','2','4'),
    ('5','2020-10-28 03:19:03','2020-10-28 03:19:03','1','5');