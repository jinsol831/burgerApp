create database burger_db;
use burger_db;

create table burger(
id Integer(5) Auto_increment Not null,
burger_name varchar(20) not null,
devoured boolean,
primary key(id)
);