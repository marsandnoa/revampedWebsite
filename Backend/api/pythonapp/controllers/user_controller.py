# Backend/pythonapp/controllers/user_controller.py
from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from ..models import User
from flasgger import swag_from

user_bp = Blueprint('user', __name__)

@user_bp.route('/api/users/getall', methods=['GET'])
@jwt_required()
@swag_from({
    'responses': {
        200: {
            'description': 'A list of users',
            'schema': {
                'type': 'array',
                'items': {
                    'type': 'object',
                    'properties': {
                        'id': {'type': 'integer'},
                        'firstName': {'type': 'string'},
                        'lastName': {'type': 'string'},
                        'emailAddress': {'type': 'string'},
                    }
                }
            }
        }
    }
})
def get_users():
    users = User.query.all()
    return jsonify([{'id': user.id, 'firstName': user.first_name, 'lastName': user.last_name, 'emailAddress': user.email_address} for user in users])
