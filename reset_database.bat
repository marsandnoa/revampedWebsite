@echo off

REM Check if the volume exists
docker volume inspect mysql_data_volume >nul 2>&1

REM If the volume exists, remove it
if %errorlevel% equ 0 (
    echo Removing existing Docker volume 'mysql_data_volume'...
    docker volume rm mysql_data_volume
)

REM Create a new Docker volume
echo Creating new Docker volume 'mysql_data_volume'...
docker volume create mysql_data_volume

echo Docker volume 'mysql_data_volume' has been reset.
