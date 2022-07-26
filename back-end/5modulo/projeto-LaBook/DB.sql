-- Active: 1656526084015@@35.226.146.116@3306@silveira-21814729-bernardo-braga

CREATE TABLE
    IF NOT EXISTS Labook_users(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS Labook_posts(
        id VARCHAR(255) PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        type ENUM("normal", "event") DEFAULT "normal",
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES Labook_users (id)
    );

CREATE TABLE
    IF NOT EXISTS Amizade (
        id_eu varchar(300),
        id_amigo varchar(300),
        primary key (id_eu, id_amigo),
        foreign key (id_eu) references Labook_users (id),
        foreign key (id_amigo) references Labook_users (id)
    );

Drop Table Amizade;