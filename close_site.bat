@echo off

REM Stopping all running Docker containers
echo Stopping all running Docker containers...
for /f "tokens=*" %%i in ('docker ps -q') do docker stop %%i

REM Removing all stopped Docker containers
echo Removing all stopped Docker containers...
for /f "tokens=*" %%i in ('docker ps -a -q') do docker rm %%i

REM Terminating the Gradle application
echo Terminating the Gradle application...
for /f "tokens=5" %%i in ('netstat -ano ^| findstr ":8080"') do taskkill /F /PID %%i

echo All services stopped.

echo All services stopped.

pause
