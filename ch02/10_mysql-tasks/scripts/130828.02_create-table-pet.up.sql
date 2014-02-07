create table pet
(
    id int not null auto_increment,
    ownerId int not null, -- pet owner
    nickName varchar(255),
    breed varchar(255),
    primary key (id),
    foreign key (ownerId) references person(id)
);