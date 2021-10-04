CREATE DATABASE web_project_g11;

drop table web_project_g11.user;
drop table web_project_g11.store;
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
    about varchar(500),
    photo longblob 
    
);
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("brenda@gmail.com", "brenda", "bibi", "bbbbbb", "boho", "hi, my name is brenda- welcome to my boho store");


create table web_project_g11.item
(
    item_id int NOT NULL AUTO_INCREMENT primary key,
	name varchar(500) not null,
    style varchar(500) not null,
    price int not null,
    size varchar(500) not null,
    brand varchar(500) not null,
    photo longblob not null,
    store_id varchar (500)
);

insert into web_project_g11.item (name, style, price, size, brand, photo, store_id) values ('bag', 'boho', 40, 'M', 'zara', '0x612E6A706567', 'brenda@gmail.com');
insert into web_project_g11.item (name, style, price, size, brand, photo, store_id) values ('bbb', 'boho', 40, 'M', 'zara', '0x612E6A706567', 'brenda@gmail.com');

create table web_project_g11.userFavorites
(
    item_id int NOT NULL AUTO_INCREMENT primary key,
	name varchar(500) not null,
    style varchar(500) not null,
    price int not null,
    size varchar(500) not null,
    brand varchar(500) not null,
    photo longblob not null,
     store_id varchar(500)
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
    store_id varchar(500) 
);

create table web_project_g11.contactUs
(
	request_id int NOT NULL AUTO_INCREMENT primary key,
	fullName varchar(500) not null,
	phone int not null,
	Email varchar(500) not null,
	comment varchar(500) not null
);





select * from web_project_g11.user;
select * from web_project_g11.shoppingbag;