#!/bin/bash
set -e

# Start SQL Server and keep it in the background
/opt/mssql/bin/sqlservr &

# Wait for SQL Server to start
echo "Waiting for SQL Server to start..."
sleep 30s

# Use a loop to check if SQL Server is ready
until /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Passw0rd!' -Q "SELECT 1" > /dev/null 2>&1
do
    echo "SQL Server is starting up..."
    sleep 10s
done

echo "SQL Server is up. Executing scripts..."

# Execute each SQL script
# Assuming /var/opt/mssql/scripts/ is the new script directory
for script in ./scripts/*.sql
do
    echo "Executing script: $script"
    /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Passw0rd!' -i "$script"
done


# Keep the process running
wait $!
