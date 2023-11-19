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