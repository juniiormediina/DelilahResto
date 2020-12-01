# Delilah Restó (Backend)

Backend para un sistema de pedidos online para un restaurante poniendo en funcionamiento las partes necesarias para montar una REST API que permita realizar operaciones CRUD sobre una estructura de datos.

---

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Sigue las siguientes **Instrucciones** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

Instale y configure los siguientes programas los cuales seran necesarios para el correcto funcionamiento de la aplicación

1. Contar con un Editor de Texto, recomiendo el uso de [VsCode](https://code.visualstudio.com/).
2. Instalar y configurar un motor de base de datos [MYSQL](https://www.mysql.com/).
3. Instalar [NodeJS](https://nodejs.org/en/) en tu Sistema Operativo.
4. Instalar [Postaman](https://www.postman.com/downloads/) la cual es una herramienta que nos servira para realizar las consultas de prueba a nuestra API.

### Instalación 🔧

A continuación encontraras una serie de pasos que te dicen lo que debes ejecutar para tener un entorno de desarrollo local ejecutandose

Este paso es totalmente opcional ya que te facilita una pequeña base de datos de pruebas

1. Desde tu montor de base de datos ejecuta el archivo [**database.sql**](https://github.com/juniiormediina/DelilahResto/blob/master/Back-End/database.sql) ubicado dentro de la carpeta Back-End.

Ahora una vez abierto el proyecto desde tu editor de texto, abra la terminal de VsCode, asegurese de estar en la ruta de la carpeta Back-End y ejecute la siguiente linea de comando, con la cual se le instalaran todas las dependencias necesarias

```Bash
npm install
```

Ya instaladas todas las dependencias para este proyecto; vamos a crear un archivo dentro de la misma carpeta de Back-End llamado ".env" donde vamos a colocar la siguiente informacion

```Bash
USER = aquí coloque su usuario de base de datos
PASS = aqui coloque su contraseña de base de datos

NAME_DB = delilah_resto
HOST = localhost

JWT_SECRET = aquí coloque una palabra secreta
```

Ya desde la terminal ejecuta la siguiente linea de comando

```Bash
npm start
```

Una vez ejecutado el comando anterior en su consola o terminal observara algo muy parecido a lo siguiente.

```Bash
$ npm start

> delilahresto@1.0.0 start C:\Users\diazk\Documents\Projects\DelilahResto\DelilahResto\Back-End
> node index.js

Server started...
Executing (default): SELECT 1+1 AS result
Executing (default): CREATE TABLE IF NOT EXISTS `user` (`id` INTEGER(10) NOT NULL auto_increment , `firstname` VARCHAR(50) NOT NULL, `lastname` VARCHAR(50) NOT NULL, `phone` VARCHAR(15) NOT NULL, `address` VARCHAR(100) NOT NULL, `email`
VARCHAR(50) NOT NULL, `profile` VARCHAR(10) NOT NULL, `password` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): CREATE TABLE IF NOT EXISTS `requests` (`id` INTEGER(10) NOT NULL auto_increment , `status` VARCHAR(50) NOT NULL, `Payment_method` VARCHAR(30) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `userId` INTEGER(10), PRIMARY KEY (`id`), FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
DB is connected
Executing (default): CREATE TABLE IF NOT EXISTS `product` (`id` INTEGER(10) NOT NULL auto_increment , `name` VARCHAR(50) NOT NULL, `description` VARCHAR(255) NOT NULL, `type` VARCHAR(20) NOT NULL, `price` VARCHAR(20) NOT NULL, `image` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): CREATE TABLE IF NOT EXISTS `order` (`quantity` INTEGER(10) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `productId` INTEGER(10) , `requestId` INTEGER(10) , PRIMARY KEY (`productId`, `requestId`), FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`requestId`) REFERENCES `requests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `requests`
Executing (default): SHOW INDEX FROM `user`
Executing (default): SHOW INDEX FROM `product`
Executing (default): SHOW INDEX FROM `order`
```

En este punto tu aplicacion debe de estar completamente funcional.

## Ejecutando las pruebas ⚙️

Para conocer más sobre la ejecución de pruebas, podrias consultar el archivo [**spec.yaml**](https://github.com/juniiormediina/DelilahResto/blob/master/Back-End/spec.yaml).

También podran encontrar un archivo llamado [DelilahResto.postman_collection.json](https://github.com/juniiormediina/DelilahResto/blob/master/Back-End/DelilahResto.postman_collection.json) ubicado dentro de la carpeta Postman, el cual tienen la posibilidad de importarlo en su Postman con la finalidad de facilitar las pruebas de los diferentes EndPoints de nuestra API

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](https://github.com/juniiormediina/DelilahResto/blob/master/LICENSE) para detalles

---

hecho ⌨️ con ❤️ por [Junior Medina](https://github.com/juniiormediina) 😊
