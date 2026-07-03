
-- Create Database
CREATE DATABASE Supermarkett1DB;
GO

USE Supermarket1DB;
GO

-- Products Table
CREATE TABLE Products
(
    ProductID INT PRIMARY KEY IDENTITY(1,1),
    ProductName VARCHAR(100) NOT NULL,
    Category VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    Quantity INT NOT NULL
);

-- Customers Table
CREATE TABLE Customers
(
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    CustomerName VARCHAR(100) NOT NULL,
    Phone VARCHAR(20),
    Address VARCHAR(150)
);

-- Sales Table
CREATE TABLE Sales
(
    SaleID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT NOT NULL,
    SaleDate DATE NOT NULL,
    TotalAmount DECIMAL(10,2) NOT NULL,
    PaymentMethod VARCHAR(50) NOT NULL,

    CONSTRAINT FK_Sales_Customers
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);

-- SaleDetails Table
CREATE TABLE SaleDetails
(
    DetailID INT PRIMARY KEY IDENTITY(1,1),
    SaleID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL,
    UnitPrice DECIMAL(10,2) NOT NULL,

    CONSTRAINT FK_SaleDetails_Sales
    FOREIGN KEY (SaleID)
    REFERENCES Sales(SaleID),

    CONSTRAINT FK_SaleDetails_Products
    FOREIGN KEY (ProductID)
    REFERENCES Products(ProductID)
);

-- Products
INSERT INTO Products(ProductName, Category, Price, Quantity)
VALUES
('Rice', 'Food', 30, 100),
('Sugar', 'Food', 20, 50),
('Juice', 'Drinks', 15, 80);

-- Customers
INSERT INTO Customers(CustomerName, Phone, Address)
VALUES
('Ahmed Ali', '615555555', 'Mogadishu'),
('Amina Hassan', '617777777', 'Mogadishu');

-- Sales
INSERT INTO Sales(CustomerID, SaleDate, TotalAmount, PaymentMethod)
VALUES
(1, '2026-06-15', 65, 'EVC Plus');

-- SaleDetails
INSERT INTO SaleDetails(SaleID, ProductID, Quantity, UnitPrice)
VALUES
(1, 1, 1, 30),
(1, 2, 1, 20),
(1, 3, 1, 15);

-- View Data
SELECT * FROM Products;
SELECT * FROM Customers;
SELECT * FROM Sales;
SELECT * FROM SaleDetails;

CREATE TABLE Users
(
    UserID INT PRIMARY KEY IDENTITY(1,1),
    FullName VARCHAR(100) NOT NULL,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(100) NOT NULL,
    Role VARCHAR(30) NOT NULL
);
INSERT INTO Users (FullName, Username, Password, Role)
VALUES
('Mohamed Hassan', 'mohamed', 'mohamed123', 'Admin'),
('Amina Ali', 'amina', 'amina123', 'Manager'),
('Abdi Nur', 'abdi', 'abdi123', 'Cashier'),
('Hodan Yusuf', 'hodan', 'hodan123', 'Cashier');