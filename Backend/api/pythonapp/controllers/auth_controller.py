# Backend/pythonapp/controllers/auth_controller.py
from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, set_access_cookies, unset_jwt_cookies
from .. import db, bcrypt
from ..models import User
from flasgger import swag_from

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/api/users/register', methods=['POST'])
@swag_from({
    'parameters': [
        {
            'in': 'body',
            'name': 'body',
            'schema': {
                'type': 'object',
                'properties': {
                    'firstName': {'type': 'string'},
                    'lastName': {'type': 'string'},
                    'emailAddress': {'type': 'string'},
                    'password': {'type': 'string'}
                }
            }
        }
    ],
    'responses': {
        201: {
            'description': 'User registered successfully'
        }
    }
})
def register():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(first_name=data['firstName'], last_name=data['lastName'], email_address=data['emailAddress'], password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@auth_bp.route('/api/users/login', methods=['POST'])
@swag_from({
    'parameters': [
        {
            'in': 'body',
            'name': 'body',
            'schema': {
                'type': 'object',
                'properties': {
                    'emailAddress': {'type': 'string'},
                    'password': {'type': 'string'}
                }
            }
        }
    ],
    'responses': {
        200: {
            'description': 'Login successful',
            'schema': {
                'type': 'object',
                'properties': {
                    'message': {'type': 'string'},
                    'access_token': {'type': 'string'}
                }
            }
        },
        401: {
            'description': 'Invalid credentials'
        }
    }
})
def login():
    data = request.json
    user = User.query.filter_by(email_address=data['emailAddress']).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        access_token = create_access_token(identity={
            'email': user.email_address,
            'first_name': user.first_name,
            'last_name': user.last_name
        })
        response = jsonify({'message': 'Login successful', 'access_token': access_token})
        set_access_cookies(response, access_token)
        return response, 200
    return jsonify({'message': 'Invalid credentials'}), 401

@auth_bp.route('/api/users/logout', methods=['POST'])
def logout():
    response = jsonify({'message': 'Logout successful'})
    unset_jwt_cookies(response)
    return response, 200
