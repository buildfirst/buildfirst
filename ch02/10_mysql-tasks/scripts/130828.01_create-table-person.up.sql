create table person
(
    id int not null auto_increment,
    firstName varchar(255),
    lastName varchar(255),
    email varchar(255) not null,
    male bit,
    primary key (id)
);