-- Create a table for 5 products with product names and prices
CREATE TABLE product (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert 5 products into the product table
INSERT INTO product (name, price) VALUES
    ('Apple', 0.75),
    ('Banana', 0.60),
    ('Orange', 0.80),
    ('Watermelon', 2.50),
    ('Pineapple', 1.00);

-- Path: demo.sql
-- Create a table for 3 customers with customer names and emails
CREATE TABLE customer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Insert 3 customers into the customer table
INSERT INTO customer (name, email) VALUES
    ('John Doe', '