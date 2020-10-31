# Delilah Restó (Backend)

Backend para un sistema de pedidos online para un restaurante poniendo en funcionamiento las partes necesarias para montar una REST API que permita realizar operaciones CRUD sobre una estructura de datos.

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

1. Desde tu montor de base de datos ejecuta el archivo [**database.sql**](https://github.com/juniiormediina/DelilahResto/blob/master/Back-End/database.sql) ubicado dentro de la carpeta Back-End.

Ahora una vez el proyecto desde tu editor de texto, abra la terminal de VsCode, asegurese de estar en la ruta de la carpeta Back-End y ejecute la siguiente linea de comando

```
npm install
```

Ya instaladas todas las dependencias necesarias para el proyecto; vamos a crear un archivo dentro de la misma carpeta de Back-End llamado ".env" donde va a colocar la siguiente informacion

```
USER = aquí coloque su usuario de base de datos
PASS = aqui coloque su contraseña de base de datos

NAME_DB = delilah_resto

JWT_SECRET = aquí coloque una palabra secreta
```

Ya desde la terminal ejecuta la siguiente liena de comando

```
npm start
```

En este punto tu aplicacion debe de estar completamente funcional.

## Ejecutando las pruebas ⚙️

Para conocer más sobre la ejecución de pruebas, podrias consultar el archivo [**.yaml**](https://github.com/juniiormediina/DelilahResto/blob/master/Back-End/.yaml).

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](https://github.com/juniiormediina/DelilahResto/blob/master/LICENSE) para detalles

---

⌨️ con ❤️ por [Junior Medina](https://github.com/juniiormediina) 😊
