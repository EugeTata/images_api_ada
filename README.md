# API REST - Control de imagenes

Esta es una api para controlar el flujo de datos de una base de datos de Mongo DB. La misma fue un proyecto de un curso introductorio de Node Js en ADA ITW.

## Requisitos previos

- Node Js
- npm

## Instalacion

1. Clona este repositorio o descargalo como archivo ZIP.
2. Navega hasta la carpeta del proyecto en la terminal.
3. Ejecuta el siguiente comando para instalar las dependencias:

`npm install | npm i`

## Configuracion

Antes de ejecutar la aplicacion, asegurate las siguientes variables de entorno correspondientes a tu proyecto.
Las mismas se encuentran en `.env.example`

## Iniciando la aplicacion

1. En la terminal, dentro de la carpeta del proyecto, ejecuta el siguiente comando para iniciar la aplicacion:

`npm run dev`

2. Abre tu navegador web y visita `http://localhost:3004/api/images` para ver la aplicacion en funcionamiento.

## Estructura del proyecto

Todos los endpoint tienen como base `http://localhost:3004`

- GET `/api/images`  -  traer todas las imagenes
- GET `/api/images/:id`  -  traer una imagen
- POST `/api/images`  -  crear imagen
- PUT `/api/images/:id`  -  actualizar imagen
- DELETE `/api/images/:id`  -  borrar imagen

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algun error o tienes alguna sugerencia de mejoras, por favor crea un issue o envia una pull request.

## Licencia

Este proyecto esta bajo la [Licencia MIT](https://opensource.org/licenses/MIT).