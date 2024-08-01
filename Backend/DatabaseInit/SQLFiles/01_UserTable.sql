USE PersonalWebsite;
-- Create a User table
CREATE TABLE [User]
(
    UserID BIGINT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    EmailAddress NVARCHAR(255) UNIQUE NOT NULL,
    Password NVARCHAR(255) NOT NULL
);
GO
