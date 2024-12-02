@echo off

REM MUST START DOCKER BEFORE EXECUTING THIS FILE

REM Step 1: Stop and remove all running containers
echo Stopping and removing all running Docker containers...
for /f "tokens=*" %%i in ('docker ps -q') do docker stop %%i
for /f "tokens=*" %%i in ('docker ps -aq') do docker rm %%i

REM Step 2: Remove all Docker images
echo Removing all Docker images...
for /f "tokens=*" %%i in ('docker images -q') do docker rmi -f %%i

REM Navigate to the Backend\databaseInit directory
cd Backend\databaseInit || exit /b

REM Build the Docker image
docker build -t my-mssql-image .

REM Run the Docker container with the volume
docker run -d --name my-mssql-container -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Passw0rd!" -v mysql_data_volume:/var/opt/mssql -p 1433:1433 my-mssql-image

REM Wait for the database to be ready (you can adjust the timeout duration as needed)
echo Waiting for the database to initialize...
timeout /t 10

echo Database initialized

REM Step 3: Navigate to the Spring Boot project directory
cd ..\API\noahm || exit /b

REM Step 4: Run the Spring Boot application
echo Starting Spring Boot application...
start cmd /k "gradlew.bat bootRun"

REM Optional: Wait for user confirmation before exiting the script
pause