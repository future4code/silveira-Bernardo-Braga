-- Active: 1659980959740@@35.226.146.116@3306@silveira-21814729-bernardo-braga

create table
    AMBULNZLLC_PIZZA(
        id varchar(255) PRIMARY KEY NOT NULL,
        name VARCHAR(100) NOT NULL,
        price int not null DEFAULT 0
    );

create table
    AMBULNZLLC_INGREDIENTS(
        id varchar(255) PRIMARY KEY NOT NULL,
        name VARCHAR(100) NOT NULL,
        id_pizza varchar(255),
        CONSTRAINT fk_pizza_ingredientes FOREIGN KEY (id_pizza) REFERENCES AMBULNZLLC_PIZZA(id)
    );

select * from AMBULNZLLC_PIZZA ;

select * from AMBULNZLLC_INGREDIENTS ;