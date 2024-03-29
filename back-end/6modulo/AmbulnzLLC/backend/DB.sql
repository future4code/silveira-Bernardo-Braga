-- Active: 1659980959740@@35.226.146.116@3306@silveira-21814729-bernardo-braga

create table
    AMBULNZLLC_PIZZA(
        id varchar(255) PRIMARY KEY NOT NULL,
        name VARCHAR(100) NOT NULL,
        price int not null DEFAULT 10
    );

create table
    AMBULNZLLC_INGREDIENTS(
        id varchar(255) PRIMARY KEY NOT NULL,
        name VARCHAR(100) NOT NULL,
        id_pizza varchar(255),
        CONSTRAINT fk_pizza_ingredientes FOREIGN KEY (id_pizza) REFERENCES AMBULNZLLC_PIZZA(id)
    );

create table
    AMBULNZLLC_ORDERS(
        id varchar(255) PRIMARY KEY NOT NULL,
        name_pizza VARCHAR(100) NOT NULL,
        id_pizza varchar(255),
        quantity int default 1,
        CONSTRAINT fk_pizza_orders FOREIGN KEY (id_pizza) REFERENCES AMBULNZLLC_PIZZA(id)
    );

-- ALTER TABLE AMBULNZLLC_PIZZA ADD quantity int(100);

select * from AMBULNZLLC_PIZZA ;

select * from AMBULNZLLC_INGREDIENTS ;

select * from AMBULNZLLC_ORDERS ;

-- drop table AMBULNZLLC_INGREDIENTS;

-- drop table AMBULNZLLC_ORDERS ;

-- drop table AMBULNZLLC_PIZZA ;