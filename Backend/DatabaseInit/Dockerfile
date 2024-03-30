# Use the official Microsoft SQL Server image
FROM mcr.microsoft.com/mssql/server:2019-latest

# Accept the EULA and set the SA password
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD='Passw0rd!'

# Expose the SQL Server port
EXPOSE 1433

# Set a working directory within an allowed path
WORKDIR /var/opt/mssql

COPY --chmod=755 entrypoint.sh ./scripts/
COPY ./*.sql ./scripts/

# Use the entrypoint script to initialize the database
ENTRYPOINT ["/bin/bash", "./scripts/entrypoint.sh"]

# docker build -t my-mssql-image .
# docker run -d --name my-mssql-container -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd!' -p 1433:1433 my-mssql-image