# Desarrollo api con seguridad de JWT

## Primeros pasos
- Crea un archivo ```.env``` agrega las siguiente variables de entorno y editalas segun tus datos de postgress
```
PORT=
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
JWT_SECRET=
```

## Tablas
- Ejecuta los comandos DDL y DML que hay en el archivo ```src/database/tables.sql``` (asegurate de conectarte a la base de datos de tu conexión de postgress)

## Servidor de desarrollo
- Instala dependencias con ```npm i```
- Ejecuta el siguiente comando ``` npm run dev```
- Accede a ```http://localhost:4000/api/auth``` y crea un usuario
  - body
    - nombre
    - username
    - email
    - password

## Endpoints
- POST ```/api/auth/login```
- POST ```/api/auth/signup```
- GET ```/api/auth/productos``` -> Enviar el token en los headers con Bearer
