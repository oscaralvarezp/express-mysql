-- Creating database
CREATE DATABASE crudmysqlnode;

-- Using database
USE crudmysqlnode;

-- Creating a table

CREATE TABLE customer (
    id INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- Show all tables
SHOW TABLES;

-- DESCRIBE TABLE
describe customer;