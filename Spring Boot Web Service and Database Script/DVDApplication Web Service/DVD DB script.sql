DROP DATABASE IF EXISTS DVD;

CREATE DATABASE DVD;

USE DVD;

CREATE TABLE DVD(
	Id int not null auto_increment,
    Title varchar(50) not null,
    releaseYear int not null,
    director varchar(50) not null,
    rating varchar(10) not null,
    notes varchar(100),
    primary key (Id)
    );
    
    use DVD;
    
    insert into DVD (Title, releaseYear, Director, Rating, Notes)
    values
    ('A Great Tale', 2015, 'Sam Jones', 'PG', 'This really is a great tale!'),
    ('A Wonderful Tale', 2015, 'Joe Smith', 'PG-13', 'Wonderful, just wonderful'),
    ('A Super Tale', 1985, 'Joe Smith', 'PG', 'The original!');
    