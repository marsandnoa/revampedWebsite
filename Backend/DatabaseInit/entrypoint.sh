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

# List and execute each SQL script in order of numeric value in their name
# Assuming /var/opt/mssql/scripts/ is the script directory

SCRIPT_DIR="/var/opt/mssql/scripts"

if [ -d "$SCRIPT_DIR" ]; then
    echo "Scripts directory exists. Listing scripts:"
    ls "$SCRIPT_DIR"
    
    for script in $(ls "$SCRIPT_DIR"/*.sql | sort); do
        echo "Executing script: $script"
        /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P 'Passw0rd!' -i "$script" || {
            echo "Error executing script: $script"
            exit 1
        }
    done
else
    echo "Directory $SCRIPT_DIR does not exist."
    exit 1
fi

# Keep the process running
wait $!
