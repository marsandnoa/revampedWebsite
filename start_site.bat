@echo off

REM MUST START DOCKER BEFORE EXECUTING THIS FILE

REM Navigate to the Backend\databaseInit directory
cd Backend\databaseInit || exit /b

REM Build the Docker image
docker build -t my-mssql-image .

REM Run the Docker container with the volume
docker run -d --name my-mssql-container -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Passw0rd!" -v mysql_data_volume:/var/opt/mssql -p 1433:1433 my-mssql-image

REM Wait for the database to be ready (you can adjust the timeout duration as needed)
echo Waiting for the database to initialize...
timeout /t 10

REM Navigate to the Backend\api directory
cd ..\api || exit /b

REM Create a virtual environment
echo Creating virtual environment...
python -m venv flaskApiEnv

REM Activate the virtual environment
echo Activating virtual environment...
call flaskApiEnv\Scripts\activate

REM Install required packages
echo Installing Flask, Flasgger, and Flask-SQLAlchemy...
pip install flask flasgger Flask-SQLAlchemy pymssql Flask-JWT-Extended Flask-Bcrypt Flask-Cors

REM Run the Flask application
echo Starting Flask application...
start cmd /k "call flaskApiEnv\Scripts\activate && python run.py"

REM Wait for Flask application to start
timeout /t 10

REM Deactivate virtual environment before running OpenAPI Generator
call flaskApiEnv\Scripts\deactivate

REM Navigate to the Frontend directory
cd ../../Frontend/react-app || exit /b

REM Hook generator
powershell -Command "Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; openapi-generator-cli generate -i http://localhost:5000/apidocs/swagger.json -g typescript-redux-query -o ./generated -c ./config.json; node update-index.js; Set-ExecutionPolicy -Scope Process -ExecutionPolicy Restricted -Force"

echo OpenAPI Generation Complete

REM Install npm dependencies
powershell -Command "npm install --force"

REM Start the React development server
powershell -Command "npm start --force"

REM Waiting for web page to start
timeout /t 20

REM Open the web page and Swagger UI in the default browser
start http://localhost:3000
start http://localhost:5000/apidocs/

pause
