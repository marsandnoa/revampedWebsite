# Use the official Microsoft SQL Server image
FROM mcr.microsoft.com/mssql/server:2019-latest

# Accept the EULA and set the SA password
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=Passw0rd!

# Expose the SQL Server port
EXPOSE 1433

# Set a working directory within an allowed path
WORKDIR /var/opt/mssql

# Switch to root user to set permissions
USER root

# Create the scripts directory
RUN mkdir -p /var/opt/mssql/scripts

# Copy entrypoint script and set permissions
COPY entrypoint.sh /var/opt/mssql/scripts/
# Copy SQL files
COPY ./SQLFiles/*.sql /var/opt/mssql/scripts/

RUN chmod +x /var/opt/mssql/scripts/entrypoint.sh

# Switch back to the default user
USER mssql

# Use the entrypoint script to initialize the database
ENTRYPOINT ["/bin/bash", "/var/opt/mssql/scripts/entrypoint.sh"]

# docker build -t my-mssql-image .
# docker run -d --name my-mssql-container -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Passw0rd!' -p 1433:1433 my-mssql-image