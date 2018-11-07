DROP DATABASE IF EXISTS NearMe;
CREATE DATABASE NearMe;
USE NearMe;

CREATE TABLE userInfos(
	id INTEGER AUTO_INCREMENT,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(100),
    password VARCHAR(50),
    PRIMARY KEY (ID)
    );

INSERT INTO userInfos(first_name, last_name, email, password)
VALUES ("Jeff", "Opoku", "jo@gmail.com", "1234");

INSERT INTO userInfos(first_name, last_name, email, password)
VALUES ("Kwabena", "Donkor", "kd@yahoo.com", "5678");

INSERT INTO userInfos(first_name, last_name, email, password)
VALUES ("Timothy", "Akwetey", "ta@live.com", "9876");

INSERT INTO userInfos(first_name, last_name, email, password)
VALUES ("Dela", "Ahadzi", "da@gmail.com", "5432");

INSERT INTO userInfos(first_name, last_name, email, password)
VALUES ("George", "Owusu", "go@gmail.com", "abcd");