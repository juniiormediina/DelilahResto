# Delilah Restó (Backend)

Backend para un sistema de pedidos online para un restaurante poniendo en funcionamiento las partes necesarias para montar una REST API que permita realizar operaciones CRUD sobre una estructura de datos.

![status](https://img.shields.io/badge/status-running-green.svg?colorB=00C106) ![readme](https://img.shields.io/badge/readme-OK-green.svg?colorB=00C106) ![database](https://img.shields.io/badge/database-OK-green.svg?colorB=00C106) ![commits](https://img.shields.io/badge/commits-2-blue.svg) ![tag](https://img.shields.io/badge/tag-v0.1-orange.svg)
![template](https://img.shields.io/badge/template-twig-yellow.svg)

---

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Sigue las **Instrucciones** para conocer como desplegar el proyecto.

### Pre-requisitos 📋

Instale y configure los siguientes programas los cuales seran necesarios para el correcto funcionamiento de la aplicación

1. Contar con un Editor de Texto, recomiendo el uso de [VsCode](https://code.visualstudio.com/).
2. Instalar y configurar un motor de base de datos [MYSQL](https://www.mysql.com/).
3. Instalar [NodeJS](https://nodejs.org/en/) en tu Sistema Operativo.
4. Instale la librería [Dotenv](https://www.npmjs.com/package/dotenv) puede ser de manera global o local.

Para instalarlo de manera local en tu proyecto, ejecuta la siguiente linea de comando ubicado en la carpeta de tu proyecto

```
npm i dotenv
```

Si deseas instalarlo de manera global con el siguiente comando puedes hacerlo

```
npm i -g dotenv
```

5. Instalar [Postaman](https://www.postman.com/downloads/) la cual es una herramienta que nos servira para realizar las consultas de prueba a nuestra API.

### Instalación 🔧

A continuación encontraras una serie de pasos que te dicen lo que debes ejecutar para tener un entorno de desarrollo local ejecutandose

Este paso es totalmente opcional ya que te facilita una pequeña base de datos de pruebas

1. Desde tu montor de base de datos ejecuta el archivo **database.sql** ubicado dentro de la carpeta Back-End.

Ahora una vez el proyecto desde tu editor de texto, abra la terminal de VsCode, asegurese de estar en la ruta de la carpeta Back-End y ejecute la siguiente linea de comando

```
npm install
```

Ya instaladas todas las dependencias necesarias para el proyecto; vamos a crear un archivo dentro de la misma carpeta de Back-End llamado ".env" donde va a colocar la siguiente informacion

```
USER = aquí su usuario de base de datos
PASS = aqui su contraseña de base de datos

NAME_DB = delilah_resto

JWT_SECRET = aquí coloque una palabra secreta
```

Ya desde la terminal ejecuta la siguiente liena de comando

```
npm star
```

En este punto tu aplicacion debe de estar completamente funcional.

## Ejecutando las pruebas ⚙️

Explica como ejecutar las pruebas automatizadas para este sistema

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md]('./LICENSE') para detalles

---

⌨️ con ❤️ por [Junior Medina](https://github.com/juniiormediina) 😊
