-- Assignment 1 & 3: employees
CREATE TABLE IF NOT EXISTS employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  department VARCHAR(50),
  salary INTEGER
);

INSERT INTO employees (name, department, salary) VALUES
('Alice', 'Engineering', 90000),
('Bob', 'Marketing', 60000),
('Charlie', 'Engineering', 95000),
('Diana', 'HR', 55000),
('Eve', 'Engineering', 85000),
('Frank', 'Marketing', 62000),
('Grace', 'HR', 58000),
('Henry', 'Engineering', 88000),
('Isla', 'Marketing', 64000),
('Jack', 'HR', 57000);

-- Assignment 2: customers
CREATE TABLE IF NOT EXISTS customers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO customers (name, email) VALUES
('John Smith', 'john@example.com'),
('Sarah Jones', 'sarah@example.com'),
('Mike Brown', 'mike@example.com'),
('Emily Davis', 'emily@example.com');

-- Assignment 2: orders
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER REFERENCES customers(id),
  order_date DATE,
  amount INTEGER
);

INSERT INTO orders (customer_id, order_date, amount) VALUES
(1, '2024-01-15', 750),
(2, '2024-01-20', 300),
(1, '2024-02-01', 1200),
(3, '2024-02-10', 550),
(2, '2024-03-05', 890),
(4, '2024-03-12', 450),
(3, '2024-03-20', 620);