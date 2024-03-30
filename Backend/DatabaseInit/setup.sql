-- Create the NoahsWebsite database
CREATE DATABASE NoahsWebsite;
GO

-- Switch context to the newly created database
USE NoahsWebsite;
GO

-- Create a User table
CREATE TABLE [User] (
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    EmailAddress NVARCHAR(255) UNIQUE NOT NULL,
    Password NVARCHAR(255) NOT NULL
);
GO

-- Optionally, insert some sample data into the User table
INSERT INTO [User] (FirstName, LastName, EmailAddress, Password)
VALUES ('John', 'Doe', 'john.doe@email.com', 'hashedpassword123'),
       ('Jane', 'Doe', 'jane.doe@email.com', 'hashedpassword456');
GO

-- Check the inserted data
SELECT * FROM [User];
GO
