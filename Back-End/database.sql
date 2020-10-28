CREATE DATABASE `delilah_resto` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE `user`
(   `id` smallint NOT NULL AUTO_INCREMENT,
    `firstname` varchar(50) NOT NULL,
    `lastname` varchar(50) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `address` varchar(100) NOT NULL,
    `email` varchar(50) NOT NULL,
    `pass` varchar(20) NOT NULL,
    `rol` varchar(255) NOT NULL,
    PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `delilah_resto.products`
    (`id`, `name`, `description`, `type`, `price`, `imagen`) 
VALUES
    ('1', 'Pizza', 'Margarita', '2', '30', 'no disponible'),
    ('2', 'SalchiPapas', 'Con salsa', '1', '20', 'no disponible'),
    ('3', 'Perro Caliente', 'Margarita', '2', '30', 'no disponible'),
    ('4', 'CangriBurguer', 'sencilla', '4', '35', 'no disponible'),
    ('5', 'Pizza', 'Margarita', '2', '30', 'no disponible'),
    ('6', 'Pizza', 'Margarita', '2', '30', 'no disponible'),
    ('7', 'Pizza', 'Margarita', '2', '30', 'no disponible'),
    ('8', 'Pizza', 'Margarita', '2', '30', 'no disponible'),
    ('9', 'Pizza', 'Margarita', '2', '30', 'no disponible'),
    ('10', 'Pizza', 'Margarita', '2', '30', 'no disponible'),
    ('11', 'Pizza', 'Margarita', '2', '30', 'no disponible');


INSERT INTO `reservaciones` 
    (`id`,`nombre`, `apellido`, `hora`, `fecha`, `cantidadmesa`) 
VALUES
    ('1', 'Juan', 'De la torre', '10:30:00', '2019-06-28', '3'),
    ('2', 'Antonio', 'Hernandez', '14:00:00', '2019-07-30', '2'),
    ('3', 'Pedro', 'Juarez', '20:00:00', '2019-06-25', '5'),