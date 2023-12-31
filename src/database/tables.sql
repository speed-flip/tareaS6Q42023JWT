-- Active: 1697072596370@@localhost@5432@tarea_s6

CREATE TABLE
    usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        username VARCHAR(50) UNIQUE,
        email VARCHAR(100) UNIQUE,
        password VARCHAR(255),
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at DATE
    );

CREATE TABLE
    productos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        descripcion VARCHAR(256),
        precio NUMERIC,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at DATE
    )

INSERT INTO
    productos (nombre, descripcion, precio)
VALUES (
        'Producto 1',
        'Descripcion producto 1',
        200
    ), (
        'Producto 2',
        'Descripcion producto 2',
        300
    ), (
        'Producto 3',
        'Descripcion producto 3',
        560
    );