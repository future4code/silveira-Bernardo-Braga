-- Active: 1656526084015@@35.226.146.116@3306@silveira-21814729-bernardo-braga

Create Table
    if NOT EXISTS USER_CUBO(
        id varchar(255) PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(150) NOT NULL,
        participation INT NOT NULL
    );

DROP TABLE USER_CUBO;