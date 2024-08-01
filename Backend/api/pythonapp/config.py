# app/config.py
class Config:
    SQLALCHEMY_DATABASE_URI = 'mssql+pymssql://sa:Passw0rd!@localhost:1433/PersonalWebsite'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = 'your_jwt_secret_key'  # Change this to a random secret key
