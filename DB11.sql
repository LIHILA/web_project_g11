CREATE DATABASE web_project_g11;

drop table web_project_g11.user;
drop table web_project_g11.item;
drop table web_project_g11.userFavorites;
drop table web_project_g11.shoppingbag;
drop table web_project_g11.contactUs;

create table web_project_g11.user
(
    email varchar(500) NOT NULL primary key,
	firstName varchar(500) not null,
    lastName varchar(500) not null,
    pass varchar(500) not null,
    FavoritStyle varchar(500) not null,
    about varchar(500) not null,
    photo longblob not null
);

create table web_project_g11.item
(
    item_id int NOT NULL AUTO_INCREMENT primary key,
	name varchar(500) not null,
    style varchar(500) not null,
    price int not null,
    size varchar(500) not null,
    brand varchar(500) not null,
    photo longblob not null,
    store_id varchar(500) not null
);

create table web_project_g11.userFavorites
(
    item_id int NOT NULL AUTO_INCREMENT primary key,
	name varchar(500) not null,
    style varchar(500) not null,
    price int not null,
    size varchar(500) not null,
    brand varchar(500) not null,
    photo longblob not null,
    store_id varchar(500) not null
);

create table web_project_g11.shoppingbag
(
    item_id int NOT NULL AUTO_INCREMENT primary key,
	name varchar(500) not null,
    style varchar(500) not null,
    price int not null,
    size varchar(500) not null,
    brand varchar(500) not null,
    photo longblob not null,
    store_id varchar(500) not null
);

create table web_project_g11.contactUs
(
	request_id int NOT NULL AUTO_INCREMENT primary key,
	fullName varchar(500) not null,
	phone int not null,
	Email varchar(500) not null,
	comment varchar(500) not null
);