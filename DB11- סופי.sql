CREATE DATABASE web_project_g11;

drop table web_project_g11.user;
-- drop table web_project_g11.store;
-- drop table web_project_g11.item;
-- drop table web_project_g11.userFavorites;
-- drop table web_project_g11.shoppingbag;
-- drop table web_project_g11.contactUs;

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



insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("brenda_gmail.com", "brenda", "bibi", "bbbbbbbb", "boho", "hi, my name is brenda- welcome to my boho store","0x612E6A706567");
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("shay@gmail.com", "shay", "piram", "ssssssss", "Occasion", "hi, my name is shay- welcome to my boho store","0x612E6A706567");
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("lihi@gmail.com", "lihi", "lavan", "llllllll", "boho", "hi, my name is lihi- welcome to my boho store","0x612E6A706567");
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("tom@gmail.com", "tom", "yanai", "tttttttt", "Casual", "hi, my name is tom- welcome to my boho store","0x612E6A706567");
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("maya@gmail.com", "maya", "mimi", "mmmmmmmm", "Denim", "hi, my name is maya- welcome to my boho store","0x612E6A706567");
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("Nitzan@gmail.com", "Nitzan", "nini", "nnnnnnnn", "Black", "hi, my name is nitzan- welcome to my boho store","0x612E6A706567");
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("noa@gmail.com", "noa", "nono", "nnnnnnnn", "Glitter", "hi, my name is noa- welcome to my boho store","0x612E6A706567");
insert into web_project_g11.user (email, firstName,lastName,pass, FavoritStyle, about,photo) values ("gal@gmail.com", "gal", "glgl", "gggggggg", "Glitter", "hi, my name is gal- welcome to my boho store","0x612E6A706567");


insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "60", "s", "adika","0x612E6A706567", "brenda@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "T-Shirt", "boho", "60", "s", "Zara","0x612E6A706567", "brenda@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "dress", "boho", "80", "s", "Gucci","0x612E6A706567", "brenda@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "60", "s", "Chanel","0x612E6A706567", "Lihi@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "Shorts", "boho", "130", "s", "adika","0x612E6A706567", "Shay@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "skini", "boho", "200", "s", "billabong","0x612E6A706567", "Tom@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "short", "boho", "60", "s", "H&M","0x612E6A706567", "Maya@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "90", "s", "PullAndBear","0x612E6A706567", "Gal@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "dress", "boho", "40", "s", "adika","0x612E6A706567", "lihi@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "shoes", "boho", "100", "s", "adika","0x612E6A706567", "shay@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "heels", "boho", "150", "s", "adika","0x612E6A706567", "tom@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "60", "s", "adika","0x612E6A706567", "shay@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "60", "s", "adika","0x612E6A706567", "brenda@gmail.com");
insert into web_project_g11.item (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "60", "s", "adika","0x612E6A706567", "brenda@gmail.com");

insert into web_project_g11.userFavorites (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "60", "s", "adika","0x612E6A706567", "brenda@gmail.com");
insert into web_project_g11.userFavorites (name, style, price, size, brand , photo, store_id) values ( "dress", "boho", "40", "s", "adika","0x612E6A706567", "lihi@gmail.com");
insert into web_project_g11.userFavorites (name, style, price, size, brand , photo, store_id) values ( "shoes", "boho", "100", "s", "adika","0x612E6A706567", "shay@gmail.com");


insert into web_project_g11.shoppingbag (name, style, price, size, brand , photo, store_id) values ( "skini", "boho", "200", "s", "billabong","0x612E6A706567", "Tom@gmail.com");
insert into web_project_g11.shoppingbag (name, style, price, size, brand , photo, store_id) values ( "short", "boho", "60", "s", "H&M","0x612E6A706567", "Maya@gmail.com");
insert into web_project_g11.shoppingbag (name, style, price, size, brand , photo, store_id) values ( "skirt", "boho", "90", "s", "PullAndBear","0x612E6A706567", "Gal@gmail.com");

insert into web_project_g11.contactUs (fullName, phone, Email, comment) values ("sima", "0503888366", "sima@gmail.com", "I just wanna to say that your website is amaizing");
insert into web_project_g11.contactUs (fullName, phone, Email, comment) values ("lir", "0504442366", "lir@gmail.com", "I was unable to connect to your website");





select * from web_project_g11.user;
select * from web_project_g11.shoppingbag;


