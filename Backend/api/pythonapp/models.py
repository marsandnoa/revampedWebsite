# app/models.py
from . import db

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column('UserID', db.Integer, primary_key=True)
    first_name = db.Column('FirstName', db.String(50))
    last_name = db.Column('LastName', db.String(50))
    email_address = db.Column('EmailAddress', db.String(255), unique=True, nullable=False)
    password = db.Column('Password', db.String(255), nullable=False)
