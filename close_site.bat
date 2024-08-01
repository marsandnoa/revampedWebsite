@echo off

REM Stopping all running Docker containers
echo Stopping all running Docker containers...
for /f "tokens=*" %%i in ('docker ps -q') do docker stop %%i

REM Removing all stopped Docker containers
echo Removing all stopped Docker containers...
for /f "tokens=*" %%i in ('docker ps -a -q') do docker rm %%i

REM Stop Flask application
echo Stopping Flask application...
taskkill /IM python.exe /F

REM Stop React development server
echo Stopping React development server...
taskkill /IM node.exe /F

echo All services stopped.

pause
